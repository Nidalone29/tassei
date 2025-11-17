/// <reference types='vitest' />
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

export default defineConfig(() => ({
  root: __dirname,
  cacheDir: "../../node_modules/.vite/apps/tassei-web-client",
  server: {
    port: 8080,
    host: "localhost",
    proxy: {
      "/api": "http://localhost:3000",
    },
  },
  preview: {
    port: 8080,
    host: "localhost",
  },
  plugins: [react()],
  // Uncomment this if you are using workers.
  // worker: {
  //  plugins: [],
  // },
  build: {
    outDir: "./dist",
    emptyOutDir: true,
    reportCompressedSize: true,
    commonjsOptions: {
      transformMixedEsModules: true,
    },
  },
}));
