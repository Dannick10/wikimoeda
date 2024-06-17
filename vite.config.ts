import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import * as path from 'path'

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
