import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path, { dirname } from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

export default defineConfig({
  plugins: [react()],
  base: "/My_portfolio/", // GitHub Pages URL'ine uygun: https://rk1coder.github.io/My_portfolio/
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "client", "src"),
      "@shared": path.resolve(__dirname, "shared"),
    },
  },
  root: path.resolve(__dirname, "client"), // client klasöründeki index.html kullanılacak
  build: {
    outDir: path.resolve(__dirname, "dist"), // build dosyalarını direkt "dist" klasörüne koyuyoruz
    emptyOutDir: true,
  },
});
