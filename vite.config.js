import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";
import { peerDependencies } from "./package.json";
import dts from "vite-plugin-dts";
export default defineConfig({
    plugins: [react(), dts({ exclude: ["**/*.stories.tsx", "**/*.test.ts"] })],
    build: {
        lib: {
            entry: "./src/index.ts",
            name: "ui",
            fileName: function (format) { return "ui.".concat(format, ".js"); },
            formats: ["es", "cjs", "umd"],
        },
        rollupOptions: {
            external: Object.keys(peerDependencies),
            output: { globals: { react: "React", "react-dom": "ReactDOM" } },
        },
    },
});
