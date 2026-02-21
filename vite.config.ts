import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '/suiyue-code/',
  plugins: [react()],
  build: {
    outDir: 'dist',
  },
});