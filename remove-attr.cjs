const fs = require('fs');
const path = require('path');

// Function to remove specific attributes from SVG files
function removeAttributesFromIcons(dirPath) {
  console.log("started")
  fs.readdir(dirPath, { withFileTypes: true }, (err, files) => {
    if (err) {
      console.error('Error reading directory:', err);
      return;
    }

    files.forEach((file) => {
      const fullPath = path.join(dirPath, file.name);

      if (file.isDirectory()) {
        // Recursively process directories
        removeAttributesFromIcons(fullPath);
      } else if (file.isFile() && path.extname(file.name) === '.tsx') {
        // Process SVG files
        fs.readFile(fullPath, 'utf8', (err, data) => {
          if (err) {
            console.error('Error reading file:', err);
            return;
          }

          // Remove 'fill-rule' and 'clip-path' attributes
          let updatedData = data
            .replace(/fill-rule="[^"]*"/g, '')
            .replace(/clip-path="[^"]*"/g, '')
            .replace(/clip-rule="[^"]*"/g, '');

          // Write the updated content back to the file
          fs.writeFile(fullPath, updatedData, 'utf8', (err) => {
            if (err) {
              console.error('Error writing file:', err);
            } else {
              console.log(`Updated file: ${fullPath}`);
            }
          });
        });
      }
    });
  });
}

// Path to the icons directory
const iconsDir = path.join(__dirname, 'src/icons'); // Adjust this if needed

// Execute the function
removeAttributesFromIcons(iconsDir);
