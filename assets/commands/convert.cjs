const fs = require("fs");
const path = require("path");

// Paths
const iconsDir = path.join(__dirname, "src/icons");
const reactIndexFile = path.join(__dirname, "src/packages/vue/index.tsx");

// Padding in pixels
const PADDING = 2;

// Helper to get all index.ts files in subfolders
function getIconFiles(dir) {
  if (!fs.existsSync(dir)) return [];
  return fs.readdirSync(dir).flatMap((sub) => {
    const fullPath = path.join(dir, sub);
    if (fs.statSync(fullPath).isDirectory()) {
      const indexFile = path.join(fullPath, "index.ts");
      if (fs.existsSync(indexFile)) return [indexFile];
    }
    return [];
  });
}

// Extract exported constants from a file
function getExports(filePath) {
  const content = fs.readFileSync(filePath, "utf-8");
  const exportRegex = /export const (\w+)\s*=\s*(\[.*?\]);/gs;
  const matches = [];
  let match;
  while ((match = exportRegex.exec(content)) !== null) {
    const name = match[1];
    const value = match[2];
    matches.push({ name, value });
  }
  return matches;
}

// Convert IconNode array to SVG string with stroke, background, rounded corners, and padding
function iconNodeToSVG(nodeArrayString) {
  try {
    // eslint-disable-next-line no-eval
    const nodes = eval(nodeArrayString);
    let innerSVG = "";
    nodes.forEach(([tag, attrs]) => {
      const attrString = Object.entries(attrs)
        .filter(([k]) => k !== "key") // remove key attribute
        .map(([k, v]) => `${k}="${v}"`)
        .join(" ");
      innerSVG += `<${tag} ${attrString} />`;
    });

    const scale = (24 - 2 * PADDING) / 24; // scale to fit inside padding
    const translate = PADDING;

    return `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="black" stroke-width="2">
  <rect width="24" height="24" fill="white" rx="4" />
  <g transform="translate(${translate}, ${translate}) scale(${scale})">
    ${innerSVG}
  </g>
</svg>`;
  } catch (err) {
    console.error("Failed to parse icon node:", err);
    return `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="black" stroke-width="2">
      <rect width="24" height="24" fill="white" rx="4" />
    </svg>`;
  }
}

// Convert string to base64
function toBase64(str) {
  return Buffer.from(str).toString("base64");
}

// Generate code
function generateCode() {
  const iconFiles = getIconFiles(iconsDir);
  const lines = [
    'import { createUntitledIcon, type IconNode } from "./template";',
  ];

  const processed = new Set();
  const exportsMap = {};

  iconFiles.forEach((file) => {
    const relativePath = path
      .relative(
        path.join(__dirname, "src/packages/react"),
        file.replace(/\.ts$/, "")
      )
      .replace(/\\/g, "/");

    const exports = getExports(file);
    exports.forEach(({ name, value }) => {
      if (!processed.has(name)) {
        const svgString = iconNodeToSVG(value);
        const svgBase64 = toBase64(svgString);
        exportsMap[name] = { relativePath, svgBase64 };
        processed.add(name);
      }
    });
  });

  // Imports
  Object.entries(exportsMap).forEach(([exp, { relativePath }]) => {
    const alias = `${exp}IconNode`;
    lines.push(`import { ${exp} as ${alias} } from "${relativePath}";`);
  });

  lines.push(""); // empty line

  // Exports with metadata
  Object.entries(exportsMap).forEach(([exp, { svgBase64 }]) => {
    const alias = `${exp}IconNode`;

    lines.push(`/**`);
    lines.push(` * @component @name ${exp}`);
    lines.push(
      ` * @description Untitled UI SVG icon component, renders SVG Element with children.`
    );
    lines.push(` *`);
    lines.push(` * @preview ![img](data:image/svg+xml;base64,${svgBase64})`);
    lines.push(` * @see https://www.untitledui.com/icons - Documentation`);
    lines.push(` *`);
    lines.push(
      ` * @param {Object} props - Untitled UI icons props and any valid SVG attribute`
    );
    lines.push(` * @returns {JSX.Element} JSX Element`);
    lines.push(` */`);

    lines.push(
      `const ${exp}IconWrapper = createUntitledIcon("${exp}", ${alias} as IconNode);`
    );
    lines.push(`export const ${exp} = ${exp}IconWrapper;`);
    lines.push(`export const ${exp}Icon = ${exp}IconWrapper;`);
    lines.push(""); // empty line
  });

  return lines.join("\n");
}

// Write to React index
fs.writeFileSync(reactIndexFile, generateCode(), "utf-8");
console.log("React index.tsx updated successfully!");
