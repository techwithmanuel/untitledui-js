import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import dts from "vite-plugin-dts";
import { resolve } from "path";
import { builtinModules } from "module";

export default defineConfig({
  plugins: [
    react(),
    dts({
      insertTypesEntry: true,
    }),
  ],
  build: {
    assetsInlineLimit: 0,
    lib: {
      entry: resolve(__dirname, "src/index.ts"),
      name: "untitled-ui",
      fileName: "index",
      formats: ["es"],
    },
    rollupOptions: {
      preserveEntrySignatures: "strict",
      external: [
        "framer-motion",
        "react",
        "react-dom",
        ...builtinModules,
        /^react\//, // Ensure all submodules of React are treated as external
        /^react-dom\//,
      ],
      output: {
        manualChunks: undefined,
        entryFileNames: "[name].js",
        chunkFileNames: "icons/[name].js",
        assetFileNames: "icons/[name].[ext]",
        preserveModules: true,

        globals: {
          react: "React",
          "react-dom": "ReactDOM",
        },
      },
    },
    emptyOutDir: true,
  },
  optimizeDeps: {
    esbuildOptions: {
      treeShaking: true,
    },
  },
});
