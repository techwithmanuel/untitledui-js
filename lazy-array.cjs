const fs = require("fs");
const path = require("path");

const iconsDir = path.join(__dirname, "src", "icons");
const outputFile = path.join(__dirname, "src", "lazy.ts");

// Step 1: Read the contents of the src/icons directory
fs.readdir(iconsDir, (err, files) => {
  if (err) {
    console.error("Error reading icons directory:", err);
    return;
  }

  // Step 2: Filter out non-JS/TS files (assuming icons are in .js, .ts, or .tsx format)
  const iconFiles = files.filter(
    (file) =>
      file.endsWith(".js") || file.endsWith(".ts") || file.endsWith(".tsx")
  );

  // Step 3: Extract the filenames without extension and assign to IconNames interface
  const iconNames = iconFiles.map((file) => {
    const iconName = path.parse(file).name;
    return `${iconName}: lazy(() => import('./icons/${iconName}.js'))`;
  });

  // Step 4: Create the content to be written to src/lazy.ts
  const outputContent = `export const iconNames = {\n  ${iconNames.join(
    ",\n  "
  )}\n};\n`;

  // Step 5: Write the interface to src/lazy.ts
  fs.writeFile(outputFile, outputContent, "utf8", (err) => {
    if (err) {
      console.error("Error writing to lazy.ts:", err);
      return;
    }
    console.log("Successfully wrote icon names interface to lazy.ts");
  });
});
