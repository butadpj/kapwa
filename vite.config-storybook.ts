import { defineConfig } from 'vite';
import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

export default defineConfig({
  resolve: {
    alias: {
      '@kapwa': path.resolve(__dirname, './src/lib/kapwa'),
    },
  },
  optimizeDeps: {
    exclude: ['storybook'],
  },
  plugins: [react(), tailwindcss()],
});
