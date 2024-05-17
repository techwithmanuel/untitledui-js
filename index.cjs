const fs = require("fs");
const path = require("path");

// Function to read directory recursively
function readDirRecursively(dir) {
  let files = [];
  fs.readdirSync(dir).forEach((file) => {
    const filePath = path.join(dir, file);
    const stats = fs.statSync(filePath);
    if (stats.isDirectory()) {
      files = files.concat(readDirRecursively(filePath));
    } else {
      files.push(filePath);
    }
  });
  return files;
}

// Function to process each file
function processFile(filePath) {
  try {
    const content = fs.readFileSync(filePath, "utf-8");
    const matches = content.match(/export\s+(const|let|var)\s+(\w+):/g);
    if (matches) {
      const folderName = path.basename(path.dirname(filePath));
      const functionNames = matches.map(
        (match) => match.match(/export\s+(const|let|var)\s+(\w+):/)[2]
      );
      return { functionNames, folderName };
    }
  } catch (err) {
    console.error(`Error processing file: ${filePath}`, err);
  }
  return null;
}

// Main function
function main() {
  const iconsDir = path.join(__dirname, "src", "icons");
  const iconFiles = readDirRecursively(iconsDir);
  const exportStatements = [];
  iconFiles.forEach((file) => {
    if (
      file.endsWith(".tsx") ||
      (file.endsWith("index.tsx") && file !== path.join(iconsDir, "index.tsx"))
    ) {
      const result = processFile(file);
      if (result && result.functionNames.length > 0) {
        result.functionNames.forEach((funcName) => {
          exportStatements.push(
            `
            const Lazy${funcName} = lazy(() =>
              import("./icons/${result.folderName}").then((module) => ({ default: module.${funcName} }))
            );

            export const ${funcName}: FC<SVGComponentProps> = ({...props}) => {
              return (
                <Suspense fallback={<Fallback/>}>
                  <Lazy${funcName} {...props}/>
                </Suspense>
              )
            }
             `
          );
        });
      }
    }
  });
  const indexPath = path.join(__dirname, "src", "index.tsx");
  fs.writeFileSync(indexPath, exportStatements.join("\n"), "utf-8");
  console.log(
    `Generated src/index.tsx with ${exportStatements.length} export statements.`
  );
}

main();
