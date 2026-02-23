// vite.config.js
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/https-nishikawa-portfolio-yakiniku/', // ←GitHubリポジトリ名
  plugins: [react()],
})