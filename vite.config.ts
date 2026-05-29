import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import { vitePrerenderPlugin } from "vite-prerender-plugin";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: 8080,
  },
  plugins: [
    react(),
    // Pre-render all routes at build time so that search engines
    // (and users on slow connections) receive fully rendered HTML
    // instead of an empty <div id="root"></div>.
    vitePrerenderPlugin({
      renderTarget: "#root",
      prerenderScript: path.resolve(__dirname, "src/prerender.tsx"),
      additionalPrerenderRoutes: ["/404"],
    }),
  ].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
}));

