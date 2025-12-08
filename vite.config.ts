import { fileURLToPath, URL } from "node:url";
import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import svgLoader from "vite-plugin-svg-loader";

// https://vitejs.dev/config/
export default defineConfig({
  base: process.env.BASE_URL || "/",
  plugins: [vue(), svgLoader()],
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },
  server: {
    proxy: {
      "/api": {
        target: "http://localhost:3001",
        changeOrigin: true,
      },
    },
  },
  css: {
    postcss: "./postcss.config.js",
  },
});
