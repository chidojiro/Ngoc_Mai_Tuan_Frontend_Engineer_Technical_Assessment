import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tsconfigPaths from 'vite-tsconfig-paths';

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    port: 4000,
    proxy: {
      '/api': {
        target: 'https://bowtie-fe-assignment-api.onrender.com',
        changeOrigin: true,
        rewrite: path => path.replace(/^\/api/, ''),
      },
    },
  },
  plugins: [react(), tsconfigPaths()],
});
