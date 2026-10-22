import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Set VITE_BASE_PATH env var for GitHub Pages deployment (e.g. /febright/)
// Leave empty or '/' for root domain deployment
const base = process.env.VITE_BASE_PATH ?? '/'

export default defineConfig({
  plugins: [react()],
  base,
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
  },
})
