const fs = require("fs");
const path = require("path");

// Define the source directory
const sourceDir = path.join(__dirname, "src", "icons");

// Define the target directory
const targetDir = path.join(__dirname, "src", "all-icons");

// Ensure the target directory exists
if (!fs.existsSync(targetDir)) {
  fs.mkdirSync(targetDir);
}

// Function to convert function names to kebab case
// function toKebabCase(str) {
//   return str
//     .replace(/[_\s]+/g, "-") // Replace underscores and spaces with hyphens
//     .replace(/([a-z0-9])([A-Z])/g, "$1-$2") // Insert hyphen between lowercase and uppercase letters
//     .toLowerCase(); // Convert to lowercase
// }

// Read files in the source directory
fs.readdir(sourceDir, (err, modules) => {
  if (err) {
    console.error("Error reading source directory:", err);
    return;
  }

  // Process each module directory
  modules.forEach((moduleName) => {
    const moduleDir = path.join(sourceDir, moduleName);

    // Check if it's a directory
    if (fs.statSync(moduleDir).isDirectory()) {
      const indexPath = path.join(moduleDir, "index.tsx");

      // Check if index.tsx exists
      if (fs.existsSync(indexPath)) {
        // Read content of index.tsx
        fs.readFile(indexPath, "utf8", (err, data) => {
          if (err) {
            console.error(`Error reading ${indexPath}:`, err);
            return;
          }

          console.log(`Processing file: ${indexPath}`);

          // Split the file content into lines
          const lines = data.split("\n");

          // Initialize an array to store export functions
          const exportFunctions = [];

          // Iterate through each line
          for (let i = 0; i < lines.length; i++) {
            const line = lines[i].trim();

            // Check if the line starts with "export const" or "export function"
            if (
              line.startsWith("export const") ||
              line.startsWith("export function")
            ) {
              // Extract the entire export function block
              let exportFunction = "";
              let openBrackets = 0;
              for (; i < lines.length; i++) {
                exportFunction += lines[i] + "\n";
                openBrackets += (lines[i].match(/{/g) || []).length;
                if (openBrackets > 0) {
                  openBrackets -= (lines[i].match(/}/g) || []).length;
                  if (openBrackets === 0) {
                    break;
                  }
                }
              }
              exportFunctions.push(exportFunction.trim());
            }
          }

          console.log("Export functions:", exportFunctions);

          // Write export functions to new files in the target directory
          exportFunctions.forEach((exportFunction) => {
            const functionName = exportFunction.match(
              /\b(?:const|function)\s+(\w+)\b/
            )[1]; // Extract function name
            const fileName = functionName;
            const functionFilePath = path.join(targetDir, `${fileName}.tsx`);

            // Add import statements at the beginning of the file content
            const fileContent = `import { FC } from "react";
import { SVG, Path, SVGComponentProps } from "../template";

${exportFunction.substring(7)}

export default ${functionName};

`;

            // Write the export function with import statements to the new file
            fs.writeFile(functionFilePath, fileContent, (err) => {
              if (err) {
                console.error(`Error writing ${functionFilePath}:`, err);
              } else {
                console.log(`Created ${functionFilePath}`);
              }
            });
          });
        });
      }
    }
  });
});
