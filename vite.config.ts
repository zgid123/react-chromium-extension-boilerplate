import { resolve } from 'path';
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import { crx, type ManifestV3Export } from '@crxjs/vite-plugin';

import manifest from './public/manifest.json';

export default defineConfig({
  server: {
    port: 5173,
    strictPort: true,
    hmr: {
      port: 5173,
    },
  },
  plugins: [
    react(),
    crx({
      manifest: manifest as ManifestV3Export,
    }),
  ],
  resolve: {
    alias: [
      {
        find: '~',
        replacement: resolve(__dirname, 'src'),
      },
    ],
  },
});
