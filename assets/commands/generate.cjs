const fs = require("fs");
const path = require("path");
const { JSDOM } = require("jsdom");

// Configuration
const ASSETS_ICONS_DIR = "./assets/icons";
const OUTPUT_DIR = "./src/icons";

// Helper function to convert kebab-case to PascalCase and remove all hyphens
function kebabToPascalCase(str) {
  return str
    .split("-")
    .map((word, index) => {
      // For the first word, capitalize first letter and keep the rest as is
      // For subsequent words, capitalize first letter and lowercase the rest
      if (index === 0) {
        return word.charAt(0).toUpperCase() + word.slice(1);
      }
      return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
    })
    .join("");
}

// Helper function to generate a simple key (you can make this more sophisticated)
function generateKey(index) {
  return Math.random().toString(36).substring(2, 8);
}

// Helper function to parse SVG and extract elements
function parseSvgToArray(svgContent) {
  const dom = new JSDOM(svgContent);
  const svgElement = dom.window.document.querySelector("svg");

  if (!svgElement) {
    throw new Error("No SVG element found");
  }

  const result = [];

  function processElement(element) {
    const tagName = element.tagName.toLowerCase();
    const attributes = {};

    // Get all attributes, but for 'path' tags only include 'd' attribute
    if (tagName === "path") {
      const dAttr = element.getAttribute("d");
      if (dAttr) {
        attributes.d = dAttr;
      }
    } else {
      // For other elements, get all attributes except xmlns and version
      for (const attr of element.attributes) {
        if (attr.name !== "xmlns" && attr.name !== "version") {
          attributes[attr.name] = attr.value;
        }
      }
    }

    // Add a unique key if not present
    if (!attributes.key) {
      attributes.key = generateKey();
    }

    const elementArray = [tagName, attributes];

    // Process children
    const children = [];
    for (const child of element.children) {
      children.push(processElement(child));
    }

    if (children.length > 0) {
      elementArray.push(...children);
    }

    return elementArray;
  }

  // Process all direct children of SVG
  for (const child of svgElement.children) {
    result.push(processElement(child));
  }

  return result;
}

// Helper function to format the array as TypeScript code
function formatArrayAsTypeScript(arr, indent = 0) {
  const spaces = "  ".repeat(indent);

  if (Array.isArray(arr)) {
    if (arr.length === 0) {
      return "[]";
    }

    const items = arr.map((item) => {
      if (typeof item === "string") {
        return `"${item}"`;
      } else if (typeof item === "object" && !Array.isArray(item)) {
        const props = Object.entries(item)
          .map(([key, value]) => `${key}: "${value}"`)
          .join(", ");
        return `{ ${props} }`;
      } else if (Array.isArray(item)) {
        return formatArrayAsTypeScript(item, indent + 1);
      }
      return String(item);
    });

    if (
      items.length === 2 &&
      typeof arr[0] === "string" &&
      typeof arr[1] === "object" &&
      !Array.isArray(arr[1])
    ) {
      // Simple case: ["tagName", { props }]
      return `[${items.join(", ")}]`;
    } else {
      // Multi-line array
      const formattedItems = items
        .map((item) => `${spaces}  ${item}`)
        .join(",\n");
      return `[\n${formattedItems}\n${spaces}]`;
    }
  }

  return String(arr);
}

// Main processing function
async function processIconsDirectory() {
  try {
    // Ensure output directory exists
    if (!fs.existsSync(OUTPUT_DIR)) {
      fs.mkdirSync(OUTPUT_DIR, { recursive: true });
    }

    // Read all subdirectories in assets/icons
    const subdirs = fs
      .readdirSync(ASSETS_ICONS_DIR, { withFileTypes: true })
      .filter((dirent) => dirent.isDirectory())
      .map((dirent) => dirent.name);

    console.log(
      `Found ${subdirs.length} subdirectories: ${subdirs.join(", ")}`
    );

    for (const subdir of subdirs) {
      const subdirPath = path.join(ASSETS_ICONS_DIR, subdir);
      const outputSubdirPath = path.join(OUTPUT_DIR, subdir);

      // Create output subdirectory
      if (!fs.existsSync(outputSubdirPath)) {
        fs.mkdirSync(outputSubdirPath, { recursive: true });
      }

      // Read all SVG files in the subdirectory
      const svgFiles = fs
        .readdirSync(subdirPath)
        .filter((file) => file.endsWith(".svg"));

      console.log(`Processing ${svgFiles.length} SVG files in ${subdir}/`);

      const constants = [];

      for (const svgFile of svgFiles) {
        const svgFilePath = path.join(subdirPath, svgFile);
        const svgContent = fs.readFileSync(svgFilePath, "utf8");

        // Convert filename to PascalCase constant name
        const fileName = path.basename(svgFile, ".svg");
        const constantName = kebabToPascalCase(fileName);

        try {
          // Parse SVG content
          const svgArray = parseSvgToArray(svgContent);

          // Format as TypeScript constant
          const formattedArray = formatArrayAsTypeScript(svgArray);

          constants.push({
            name: constantName,
            value: formattedArray,
            originalFile: svgFile,
          });

          console.log(`  ✓ Processed ${svgFile} -> ${constantName}`);
        } catch (error) {
          console.error(`  ✗ Error processing ${svgFile}:`, error.message);
        }
      }

      // Generate index.ts file content
      const indexContent = [
        "// Auto-generated SVG constants",
        "// Do not edit this file manually",
        "",
        ...constants.map(
          ({ name, value, originalFile }) =>
            `// ${originalFile}\nexport const ${name} = ${value};`
        ),
        "",
      ].join("\n");

      // Write index.ts file
      const indexFilePath = path.join(outputSubdirPath, "index.ts");
      fs.writeFileSync(indexFilePath, indexContent);

      console.log(
        `✓ Generated ${indexFilePath} with ${constants.length} constants`
      );
    }

    console.log("\n✅ All SVG icons have been processed successfully!");
  } catch (error) {
    console.error("❌ Error processing icons:", error.message);
    process.exit(1);
  }
}

// Run the script
if (require.main === module) {
  processIconsDirectory();
}

module.exports = { processIconsDirectory, kebabToPascalCase };
