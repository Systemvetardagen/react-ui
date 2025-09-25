import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";
import { peerDependencies } from "./package.json";
import tailwindcss from "@tailwindcss/vite";
import path from "path";

export default defineConfig({
  plugins: [react(), tailwindcss()],
  build: {
    lib: {
      entry: "./src/index.ts",
      name: "ui",
      fileName: (format) => `ui.${format}.js`,
      formats: ["es", "cjs", "umd"],
    },
    rollupOptions: {
      external: Object.keys(peerDependencies),
      output: { globals: { react: "React", "react-dom": "ReactDOM" } },
    },
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
});
