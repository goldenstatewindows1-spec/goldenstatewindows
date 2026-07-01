import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import { imagetools } from "vite-imagetools";
import path from "path";
// https://vitejs.dev/config/
export default defineConfig(() => ({
  server: {
    host: "::",
    port: 8080,
    hmr: {
      overlay: false,
    },
  },
  plugins: [
    react(),
    // Every imported image becomes a responsive AVIF/WebP/JPEG <picture> payload.
    imagetools({
      defaultDirectives: () =>
        new URLSearchParams({ format: "avif;webp;jpg", w: "480;768;1080", as: "picture" }),
    }),
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
    dedupe: ["react", "react-dom", "react/jsx-runtime", "react/jsx-dev-runtime", "@tanstack/react-query", "@tanstack/query-core"],
  },
  build: {
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes("node_modules")) {
            if (id.includes("@supabase")) return "supabase";
            if (id.includes("@radix-ui")) return "radix";
            if (id.includes("lucide-react")) return "icons";
            return "vendor";
          }
        },
      },
    },
  },
}));
