import { defineConfig } from 'vite'
import VitePluginBuildTimestamp from 'vite-plugin-build-timestamp'

export default defineConfig({
  plugins: [
    VitePluginBuildTimestamp({ log: true, format: 'YYYY-MM-DD HH:mm:ss' }),
  ],
})
