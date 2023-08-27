import { resolve } from "path";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

const root = resolve(__dirname, "src");
const outDir = resolve(__dirname, "dist");

// https://vitejs.dev/config/
export default defineConfig({
  root,
  plugins: [react()],
  build: {
    outDir,
    emptyOutDir: true,
    rollupOptions: {
      input: {
        main: "src/index.html",
        home: "src/pages/home/index.html",
        greet: "src/greet/index.html",
        login: "src/pages/login/index.html",
        register: "src/pages/Register.tsx",
      },
    },
  },
});
