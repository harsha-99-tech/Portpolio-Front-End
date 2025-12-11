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

// Create _routes.json to route all requests to the Worker
const routesPath = path.join('.open-next', '_routes.json');
const routesConfig = {
  version: 1,
  include: ['/*'],
  exclude: []
};

fs.writeFileSync(routesPath, JSON.stringify(routesConfig, null, 2));
console.log('✓ _routes.json created');

