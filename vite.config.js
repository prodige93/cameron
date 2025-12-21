import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: {
    host: '0.0.0.0',
    port: 3000,
    open: true
  },
  preview: {
    host: '0.0.0.0',
    port: 3000
  },
  build: {
    // Optimisation du build avec code splitting et compression
    rollupOptions: {
      output: {
        manualChunks: {
          'react-vendor': ['react', 'react-dom', 'react-router-dom']
        },
        // Optimisation des noms de fichiers pour le cache
        chunkFileNames: 'assets/js/[name]-[hash].js',
        entryFileNames: 'assets/js/[name]-[hash].js',
        assetFileNames: 'assets/[ext]/[name]-[hash].[ext]'
      }
    },
    // Compression et optimisation (esbuild est plus rapide et inclus avec Vite)
    minify: 'esbuild',
    // Supprimer les console.log en production
    esbuild: {
      drop: ['console', 'debugger']
    },
    // Augmenter la taille limite des chunks
    chunkSizeWarningLimit: 1000,
    // Optimisation des assets
    assetsInlineLimit: 4096 // Inline les petits assets (< 4KB)
  },
  // Optimisation des performances
  optimizeDeps: {
    include: ['react', 'react-dom', 'react-router-dom']
  }
})

