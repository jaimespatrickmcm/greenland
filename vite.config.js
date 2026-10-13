import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Site fora do ar: sem sitemap e sem chunks de framer-motion/react-icons/swiper,
// que só serviam às páginas antigas. Reverter junto com o main.tsx.
export default defineConfig({
  plugins: [react()],
  build: {
    // Code-splitting para melhor LCP/INP
    rollupOptions: {
      output: {
        manualChunks: {
          'react-vendor': ['react', 'react-dom'],
        },
      },
    },
    chunkSizeWarningLimit: 1000,
  },
})
