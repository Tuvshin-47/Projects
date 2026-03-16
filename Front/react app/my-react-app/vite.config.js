import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite' // ss байгаа эсэхийг шалга

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
  ],
})