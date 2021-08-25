import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    port: "8080",
    proxy: {
      '/user': {
        target: 'http://localhost:3000',
        changeOrigin: true,
        // rewrite: (path) => path.replace(/^\/user/, '') // 为啥不能重写路径
      },
    }
  },
  plugins: [vue()]
})
