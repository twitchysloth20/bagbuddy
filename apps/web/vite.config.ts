import vue from '@vitejs/plugin-vue'
import { loadEnv } from 'vite'
import { defineConfig } from 'vitest/config'

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, '../..', '')
  return {
    plugins: [vue()],
    server: {
      proxy: { '/api': `http://localhost:${env.API_PORT ?? 3000}` },
    },
    test: { environment: 'jsdom' },
  }
})
