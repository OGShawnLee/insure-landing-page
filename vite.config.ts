import windicss from "vite-plugin-windicss";
import solid from "vite-plugin-solid";
import { defineConfig } from "vite";
import { resolve } from "path";

export default defineConfig({
  plugins: [solid(), windicss()],
  resolve: {
    alias: {
      "@actions": resolve("src/actions"),
      "@actions/*": resolve("src/actions/*"),
      "@assets": resolve("src/assets"),
      "@assets/*": resolve("src/assets/*"),
      "@layout": resolve("src/layout"),
      "@layout/*": resolve("src/layout/*"),
      "@signals": resolve("src/signals"),
      "@signals/*": resolve("src/signals/*")
    }
  },
  build: {
    target: "esnext",
    polyfillDynamicImport: false
  }
});
