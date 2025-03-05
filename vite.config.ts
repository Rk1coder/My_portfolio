// vite.config.ts
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path, { dirname } from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

export default defineConfig({
  plugins: [react()],
  base: '/',
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'client', 'src'),
      '@shared': path.resolve(__dirname, 'shared'),
    },
  },
  root: path.resolve(__dirname, 'client'),  // root olarak client klasörünü ayarla
  build: {
    outDir: path.resolve(__dirname, 'dist'),  // Build çıktısı 'dist' klasörüne
    emptyOutDir: true,
    rollupOptions: {
      external: ['express'],  // Sunucu tarafı modüllerini dışla
    },
  },
});
