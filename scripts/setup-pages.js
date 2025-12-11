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

// Copy public folder assets to .open-next root so they're accessible
const publicDir = path.join('.', 'public');
if (fs.existsSync(publicDir)) {
  try {
    fs.readdirSync(publicDir).forEach(item => {
      // Skip .gitkeep and other hidden files
      if (item.startsWith('.')) return;
      
      const srcPath = path.join(publicDir, item);
      const destPath = path.join('.open-next', item);
      
      // Only copy if destination doesn't exist
      if (!fs.existsSync(destPath)) {
        copyRecursiveSync(srcPath, destPath);
      }
    });
    console.log('✓ Public folder assets copied to output directory');
  } catch (error) {
    console.warn('⚠ Error copying public assets:', error.message);
  }
}

// Create _routes.json to route requests to the Worker
// Exclude static assets so they're served directly by Cloudflare Pages CDN (faster and more reliable)
const routesPath = path.join('.open-next', '_routes.json');
const routesConfig = {
  version: 1,
  include: ['/*'],
  exclude: [
    '/_next/static/*',  // Next.js static assets (JS bundles, CSS) - serve from CDN
    '/_next/image*',    // Next.js image optimization
    '/favicon.ico',
    '/favicon.svg',
    '/favicon-*.png',
    '/apple-touch-icon.png',
    '/site.webmanifest'
  ]
};

fs.writeFileSync(routesPath, JSON.stringify(routesConfig, null, 2));
console.log('✓ _routes.json created');

