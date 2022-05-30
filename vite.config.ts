import windicss from "vite-plugin-windicss";
import solid from "vite-plugin-solid";
import { defineConfig } from "vite";
import { resolve } from "path";

export default defineConfig({
  plugins: [solid(), windicss()],
  resolve: {
    alias: {
      "@assets": resolve("src/assets"),
      "@assets/*": resolve("src/assets/*")
    }
  },
  build: {
    target: "esnext",
    polyfillDynamicImport: false
  }
});
