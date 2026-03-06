import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [
    tailwindcss(),
  ],
  // Ensure all HTML entry points are included in the build
  build: {
    rollupOptions: {
      input: {
        main: 'index.html',
        about: 'about.html',
        order: 'order.html',
        shop: 'products.html',
      },
    },
  },
})