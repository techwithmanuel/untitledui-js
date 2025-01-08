import { defineConfig } from "tsup";
import vue from "unplugin-vue/esbuild";

export default defineConfig([
  {
    entry: ["packages/react/index.ts"],
    format: ["esm", "cjs"],
    outDir: "dist/react",
    minify: true,
    dts: true,
    clean: true,
    tsconfig: "packages/react/tsconfig.json",
    external: ["react", "motion"],
  },
  {
    entry: ["packages/vue/index.ts"],
    format: ["esm", "cjs"],
    outDir: "dist/vue",
    minify: true,
    dts: true,
    clean: true,
    tsconfig: "packages/vue/tsconfig.json",
    esbuildPlugins: [vue()],
    external: ["vue"],
  },
  {
    entry: ["packages/solid/index.ts"],
    format: ["esm", "cjs"],
    outDir: "dist/solid",
    minify: true,
    dts: true,
    clean: true,
    tsconfig: "packages/solid/tsconfig.json",
    external: ["solid-js"],
  },
  {
    entry: ["packages/qwik/index.ts"],
    format: ["esm", "cjs"],
    outDir: "dist/qwik",
    minify: true,
    dts: true,
    clean: true,
    tsconfig: "packages/qwik/tsconfig.json",
    external: ["@builder.io/qwik"],
  },
]);
