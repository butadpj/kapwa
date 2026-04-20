// LEGACY SITE CONFIGURATION
import { defineConfig } from 'vite';
import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    port: 3000,
  },
  build: {
    outDir: path.resolve(__dirname, './site'),
  },
  resolve: {
    alias: {
      '@ui': path.resolve(__dirname, './src/lib/demo/ui'),
      '@layout': path.resolve(__dirname, './src/lib/demo/layout'),
      '@pages': path.resolve(__dirname, './src/lib/demo/pages'),
      '@kapwa': path.resolve(__dirname, './src/lib/kapwa'),
    },
  },
  optimizeDeps: {
    exclude: ['storybook'],
  },
  plugins: [react(), tailwindcss()],
});
