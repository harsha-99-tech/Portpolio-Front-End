const fs = require('fs');
const path = require('path');

const apiDir = path.join(__dirname, '..', 'src', 'app', 'api');
const apiBackupDir = path.join(__dirname, '..', 'src', 'app', '_api_backup');

// Copy API directory to backup, then delete original for static export
if (fs.existsSync(apiDir)) {
  // Remove backup if it exists from previous run
  if (fs.existsSync(apiBackupDir)) {
    try {
      fs.rmSync(apiBackupDir, { recursive: true, force: true });
    } catch (error) {
      console.warn('⚠ Warning: Could not remove existing backup:', error.message);
      // Continue anyway - we'll overwrite it
    }
  }
  
  // Copy API directory to backup location
  fs.cpSync(apiDir, apiBackupDir, { recursive: true });
  
  // Delete original API directory
  fs.rmSync(apiDir, { recursive: true, force: true });
  
  console.log('✓ Moved API routes to backup for static export');
}

