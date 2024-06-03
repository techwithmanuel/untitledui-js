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

// Main function to generate export statements
function generateExportStatements() {
  const iconsDir = path.join(__dirname, "src", "icons");
  const iconFiles = readDirRecursively(iconsDir);
  const exportStatements = iconFiles.map((file) => {
    const fileName = path.basename(file, path.extname(file));
    return `
   
    export const ${fileName}:FC<SVGComponentProps> = ({...props}: SVGComponentProps) => {
      const Icon = lazy(() => import('./icons/${fileName}'))

      return (
        <Suspense fallback={<DefaultLazyImportFallback/>}>
        <Icon {...props} />
        </Suspense>
      )
    }`;
  });
  return exportStatements.join("\n");
}

// Main function
function main() {
  const indexPath = path.join(__dirname, "src", "index.tsx");
  const exportStatements = generateExportStatements();
  fs.writeFileSync(indexPath, exportStatements, "utf-8");
  console.log(
    `Generated src/index.ts with ${
      exportStatements.split("\n").length
    } export statements.`
  );
}

main();
