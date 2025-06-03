import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
      'kalki-ui-image-viewer': 'kalki-ui-image-viewer',
    },
    dedupe: ['react', 'react-dom'],
  },
  optimizeDeps: {
    include: ['kalki-ui-image-viewer'],
  },
  build: {
    outDir: path.resolve(__dirname, '../../dist'),
    emptyOutDir: true,
    sourcemap: true,
    commonjsOptions: {
      include: [/kalki-ui-image-viewer/, /node_modules/],
    },
  },
});
