import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    tailwindcss(),
    react(),
    {
      name: 'font-roboto',
      content: `
        @import url('https://fonts.googleapis.com/css2?family=Roboto&display=swap');
      `,
    },
  ],
})
