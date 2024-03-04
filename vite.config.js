import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig(() => {
  return {
    base: '/feedback/',
    build: {
      outDir: 'build',
      emptyOutDir: true,
    },
    plugins: [react()],
  };
});
