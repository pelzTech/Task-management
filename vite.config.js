import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: '/Task-management/', // Add this linenpm run deploy
  plugins: [react()],
})
