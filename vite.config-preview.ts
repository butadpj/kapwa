import { defineConfig } from 'vite';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const previewRoot = path.resolve(__dirname, './site');

export default defineConfig({
  appType: 'mpa',
  build: {
    outDir: previewRoot,
  },
  plugins: [
    {
      name: 'preview-storybook-trailing-slash',
      configurePreviewServer(server) {
        server.middlewares.use((req, res, next) => {
          if (req.url === '/storybook') {
            res.statusCode = 301;
            res.setHeader('Location', '/storybook/');
            res.end();
            return;
          }

          next();
        });
      },
    },
  ],
  preview: {
    port: 4173,
    open: true,
  },
});
