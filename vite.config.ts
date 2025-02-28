import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path, { dirname } from "path";
import { fileURLToPath } from "url";

// Dosya yolunu almak için gerekli olan işlemler
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// GitHub Pages için doğru base URL ayarı
export default defineConfig({
  plugins: [react()],
  base: '/My_portfolio/', // GitHub Pages repo adı
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "client", "src"),
      "@shared": path.resolve(__dirname, "shared"),
    },
  },
  root: path.resolve(__dirname, "client"), // Root dizin 'client'
  build: {
    outDir: path.resolve(__dirname, "dist"), // Build çıktısı 'dist' klasörüne
    emptyOutDir: true,
    rollupOptions: {
      external: ['express'], // Sunucu tarafı modülleri dışla
    },
  },
});

