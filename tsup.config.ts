import { defineConfig } from "tsup";
import vue from "unplugin-vue/esbuild";
import sveltePlugin from "esbuild-svelte";

export default defineConfig([
  {
    entry: ["src/packages/react/index.ts"],
    format: ["esm", "cjs"],
    outDir: "dist/react",
    minify: true,
    dts: true,
    clean: true,
    tsconfig: "src/packages/react/tsconfig.json",
    external: ["react"],
  },
  {
    entry: ["src/packages/vue/index.ts"],
    format: ["esm", "cjs"],
    outDir: "dist/vue",
    minify: true,
    dts: true,
    clean: true,
    tsconfig: "src/packages/vue/tsconfig.json",
    esbuildPlugins: [vue()],
    external: ["vue"],
  },
  {
    entry: ["src/packages/solid/index.ts"],
    format: ["esm", "cjs"],
    outDir: "dist/solid",
    minify: true,
    dts: true,
    clean: true,
    tsconfig: "src/packages/solid/tsconfig.json",
    external: ["solid-js"],
  },
  {
    entry: ["src/packages/qwik/index.ts"],
    format: ["esm", "cjs"],
    outDir: "dist/qwik",
    minify: true,
    dts: true,
    clean: true,
    tsconfig: "src/packages/qwik/tsconfig.json",
    external: ["@builder.io/qwik"],
  },
  {
    entry: ["src/packages/svelte/index.ts"],
    format: ["esm", "cjs"],
    outDir: "dist/svelte",
    minify: true,
    dts: true,
    clean: true,
    tsconfig: "src/packages/svelte/tsconfig.json",
    esbuildPlugins: [sveltePlugin()],
    external: ["svelte", "svelte/internal"],
  },
]);
