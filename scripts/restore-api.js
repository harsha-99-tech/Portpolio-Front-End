const fs = require('fs');
const path = require('path');

const apiDir = path.join(__dirname, '..', 'src', 'app', 'api');
const apiBackupDir = path.join(__dirname, '..', 'src', 'app', '_api_backup');

// Restore API directory after build
if (fs.existsSync(apiBackupDir)) {
  // Remove api dir if it exists
  if (fs.existsSync(apiDir)) {
    fs.rmSync(apiDir, { recursive: true, force: true });
  }
  
  // Copy API directory back from backup
  fs.cpSync(apiBackupDir, apiDir, { recursive: true });
  
  // Clean up backup - retry if it fails (Windows sometimes has file locks)
  try {
    fs.rmSync(apiBackupDir, { recursive: true, force: true });
  } catch (error) {
    console.warn('⚠ Warning: Could not remove backup directory immediately:', error.message);
    console.warn('   The backup directory will be removed on next build');
  }
  
  console.log('✓ Restored API routes from backup');
} else {
  // Ensure backup doesn't exist (cleanup in case of previous failed build)
  if (fs.existsSync(apiBackupDir)) {
    try {
      fs.rmSync(apiBackupDir, { recursive: true, force: true });
    } catch (error) {
      // Ignore errors during cleanup
    }
  }
}

