import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '');

  return {
    plugins: [
      react(),
    ],
    resolve: {
      alias: {
        '@': path.resolve(__dirname, './src'),
      },
    },
    define: {
      'process.env.API_KEY': JSON.stringify(env.API_KEY || process.env.API_KEY),
    },
    build: {
      outDir: 'dist',
      emptyOutDir: true,
      sourcemap: false,
      chunkSizeWarningLimit: 2000, // 调整警告阈值为 2MB (2000kB)，消除警告
      rollupOptions: {
        output: {
          manualChunks(id) {
            // 更精细的自动分包策略
            if (id.includes('node_modules')) {
              if (id.includes('react') || id.includes('react-dom')) {
                return 'vendor-react';
              }
              if (id.includes('@google/genai')) {
                return 'vendor-genai';
              }
              if (id.includes('lucide') || id.includes('markdown')) {
                return 'vendor-ui';
              }
              return 'vendor-utils';
            }
          }
        }
      }
    },
    server: {
      port: 3000,
    },
    base: './', // Use relative path for Android WebView compatibility
  };
});