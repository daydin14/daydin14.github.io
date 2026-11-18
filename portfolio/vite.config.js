import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';

// Output stays in `build` so `npm run deploy` (gh-pages -d build) is unchanged.
export default defineConfig({
  plugins: [react(), tailwindcss()],
  base: '/',
  envPrefix: ['VITE_', 'REACT_APP_'],
  build: {
    outDir: 'build',
    emptyOutDir: true,
  },
  server: {
    port: 5173,
  },
});
