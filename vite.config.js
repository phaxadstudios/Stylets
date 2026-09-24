import { defineConfig } from 'vite'; 

export default defineConfig({
  root: '.',
  server: {
    port: 3000,
    open: '/docs/index.html',
  },
  build: {
    outDir: 'dist',
    emptyOutDir: false,
  },
});
