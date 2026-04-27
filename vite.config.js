import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import Sitemap from 'vite-plugin-sitemap'

export default defineConfig({
  plugins: [
    react(),
    Sitemap({
      hostname: 'https://www.greenlandteresopolis.com.br',
      dynamicRoutes: ['/'],
      changefreq: 'weekly',
      priority: 1.0,
      lastmod: new Date(),
      readable: true,
      exclude: ['/404'],
    }),
  ],
  build: {
    // Code-splitting para melhor LCP/INP
    rollupOptions: {
      output: {
        manualChunks: {
          'react-vendor': ['react', 'react-dom'],
          'motion-vendor': ['framer-motion'],
          'icons-vendor': ['react-icons'],
          'swiper-vendor': ['swiper'],
        },
      },
    },
    chunkSizeWarningLimit: 1000,
  },
})
