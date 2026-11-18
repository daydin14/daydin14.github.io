import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// Output stays in `build` so `npm run deploy` (gh-pages -d build) is unchanged.
export default defineConfig({
  plugins: [react()],
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
