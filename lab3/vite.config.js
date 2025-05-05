import { reactRouter } from "@react-router/dev/vite";
import tailwindcss from "@tailwindcss/vite";
import { defineConfig } from "vite";

export default defineConfig({
  plugins: [reactRouter(), tailwindcss()],
  build: {
    cssMinify: true,
    ssr: false,
  },
  optimizeDeps: {
    exclude: ["virtual:react-router/server-build"],
  },
});
