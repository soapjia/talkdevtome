const fs = require('fs');
const path = require('path');

const manifestPath = path.join(__dirname, '../public/manifest.json');
const buildManifestPath = path.join(__dirname, '../build/manifest.json');

fs.copyFile(manifestPath, buildManifestPath, (err) => {
  if (err) {
    console.error('Error copying manifest:', err);
  } else {
    console.log('Manifest copied successfully.');
  }
});
