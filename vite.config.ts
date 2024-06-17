import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import styleImport from 'vite-plugin-style-import';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: true
  },
  build: {
    rollupOptions: {
      external: ['Aos/dist/aos.css']
    }
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `@import "./path/to/aos.css";`
      }
    }
  }
})
