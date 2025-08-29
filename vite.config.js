import { defineConfig } from 'vite'
import shopify from 'vite-plugin-shopify'
import tailwindcss from 'tailwindcss'

export default defineConfig({
  plugins: [
    shopify(),
    tailwindcss()
  ],
  build: {
    emptyOutDir: false
  }
})
