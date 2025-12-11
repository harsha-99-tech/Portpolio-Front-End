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

// Check if static assets exist in assets directory and need to be moved/copied
const assetsDir = path.join('.open-next', 'assets');
if (fs.existsSync(assetsDir)) {
  // OpenNext may put assets in .open-next/assets, but they need to be at root
  // Copy assets to root of output directory
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
  
  // Copy assets to root of .open-next (they'll be served from there)
  const assetsDest = path.join('.open-next', 'assets');
  // Assets are already in the right place, just log
  console.log('✓ Static assets found in assets directory');
}

// Create _routes.json to route all requests to the Worker
// OpenNext bundles static assets into the Worker, so it must handle all requests
const routesPath = path.join('.open-next', '_routes.json');
const routesConfig = {
  version: 1,
  include: ['/*'],
  exclude: []  // Worker handles everything including static assets
};

fs.writeFileSync(routesPath, JSON.stringify(routesConfig, null, 2));
console.log('✓ _routes.json created');

