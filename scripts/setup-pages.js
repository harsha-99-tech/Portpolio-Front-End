const fs = require('fs');
const path = require('path');

// Create functions directory if it doesn't exist
const functionsDir = path.join('.open-next', 'functions');
if (!fs.existsSync(functionsDir)) {
  fs.mkdirSync(functionsDir, { recursive: true });
}

// Copy worker.js to functions/_worker.js for Cloudflare Pages
const workerPath = path.join('.open-next', 'worker.js');
const workerDest = path.join(functionsDir, '_worker.js');

if (fs.existsSync(workerPath)) {
  fs.copyFileSync(workerPath, workerDest);
  console.log('✓ Worker copied to functions/_worker.js');
} else {
  console.warn('⚠ worker.js not found in .open-next directory');
}

// Also copy worker.js to root of output as _worker.js (alternative location)
const rootWorkerDest = path.join('.open-next', '_worker.js');
if (fs.existsSync(workerPath)) {
  fs.copyFileSync(workerPath, rootWorkerDest);
  console.log('✓ Worker also copied to _worker.js at root');
}

// Helper function to copy files/directories recursively
const copyRecursiveSync = (src, dest) => {
  const exists = fs.existsSync(src);
  const stats = exists && fs.statSync(src);
  const isDirectory = exists && stats.isDirectory();
  if (isDirectory) {
    if (!fs.existsSync(dest)) {
      fs.mkdirSync(dest, { recursive: true });
    }
    fs.readdirSync(src).forEach(childItemName => {
      copyRecursiveSync(
        path.join(src, childItemName),
        path.join(dest, childItemName)
      );
    });
  } else {
    fs.copyFileSync(src, dest);
  }
};

// Check if static assets exist in assets directory and copy them to root
const assetsDir = path.join('.open-next', 'assets');
if (fs.existsSync(assetsDir)) {
  // OpenNext puts assets in .open-next/assets, but they need to be accessible at root
  // Copy assets from .open-next/assets to .open-next root so Worker can serve them
  const assetsDest = path.join('.open-next');
  try {
    fs.readdirSync(assetsDir).forEach(item => {
      const srcPath = path.join(assetsDir, item);
      const destPath = path.join(assetsDest, item);
      // Only copy if destination doesn't exist or is different
      if (!fs.existsSync(destPath)) {
        copyRecursiveSync(srcPath, destPath);
      }
    });
    console.log('✓ Static assets copied from assets directory to root');
  } catch (error) {
    console.warn('⚠ Error copying assets:', error.message);
  }
}

// Copy public folder assets to .open-next root and collect file paths for routing
const publicDir = path.join('.', 'public');
const publicFiles = [];
if (fs.existsSync(publicDir)) {
  try {
    const processPublicFiles = (dir, basePath = '') => {
      const items = fs.readdirSync(dir);
      items.forEach(item => {
        if (item.startsWith('.')) return; // Skip hidden files
        
        const fullPath = path.join(dir, item);
        const stat = fs.statSync(fullPath);
        
        if (stat.isDirectory()) {
          // Recursively process subdirectories
          const newBasePath = basePath ? `${basePath}/${item}` : `/${item}`;
          processPublicFiles(fullPath, newBasePath);
        } else {
          // Add file to routing exclusion list
          const relativePath = basePath ? `${basePath}/${item}` : `/${item}`;
          publicFiles.push(relativePath);
        }
      });
    };
    
    // First, collect all file paths for routing
    processPublicFiles(publicDir);
    
    // Then copy the entire public folder into the output directory (preserve subdirectories)
    copyRecursiveSync(publicDir, '.open-next');
    console.log('✓ Public folder assets copied (recursive) to output directory');
    console.log(`✓ Found ${publicFiles.length} public files to exclude from routing`);
  } catch (error) {
    console.warn('⚠ Error processing public assets:', error.message);
  }
}

// Create _routes.json to route requests to the Worker
// Exclude static assets so they're served directly by Cloudflare Pages CDN (faster and more reliable)
const routesPath = path.join('.open-next', '_routes.json');

// Define wildcard patterns that cover multiple files
const wildcardPatterns = [
  '/_next/static/*',  // Next.js static assets (JS bundles, CSS) - serve from CDN
  '/_next/image*',    // Next.js image optimization
  '/*.png',           // All PNG files
  '/*.jpg',           // All JPG files
  '/*.jpeg',          // All JPEG files
  '/*.gif',           // All GIF files
  '/*.webp',          // All WebP files
  '/*.svg',           // All SVG files
  '/*.ico',           // All ICO files
  '/images/*',       // All files in images directory
  '/favicon-*.png',   // Favicon variants
];

// Filter out individual file paths that are already covered by wildcard patterns
const filteredPublicFiles = publicFiles.filter(filePath => {
  // Check if this file path is covered by any wildcard pattern
  return !wildcardPatterns.some(pattern => {
    // Convert wildcard pattern to regex
    const regexPattern = pattern
      .replace(/\*/g, '.*')  // Convert * to .*
      .replace(/\//g, '\\/'); // Escape slashes
    
    const regex = new RegExp(`^${regexPattern}$`);
    return regex.test(filePath);
  });
});

const routesConfig = {
  version: 1,
  include: ['/*'],
  exclude: [
    ...wildcardPatterns,
    // Common public files (only if not covered by wildcards)
    '/favicon.ico',
    '/favicon.svg',
    '/apple-touch-icon.png',
    '/site.webmanifest',
    // Exclude specific public folder files that aren't covered by wildcards
    ...filteredPublicFiles
  ]
};

fs.writeFileSync(routesPath, JSON.stringify(routesConfig, null, 2));
console.log('✓ _routes.json created');

