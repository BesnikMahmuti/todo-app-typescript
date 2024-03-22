/// <reference types="vitest" />
import react from '@vitejs/plugin-react'

import { defineConfig as defineViteConfig, mergeConfig } from 'vite'
import { defineConfig as defineVitestConfig } from 'vitest/config'

const viteConfig = defineViteConfig({
  plugins: [react()],
  server: {
    port: 3000,
  },
})

const vitestConfig = defineVitestConfig({
  test: {
    globals: true,
    environment: 'jsdom',
    css: true,
    setupFiles: './src/test/setup.ts',
  },
})

export default mergeConfig(viteConfig, vitestConfig)
