import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },


/*代理请求示例
假设你在前端代码中发起了以下请求：
axios.get('/api/users');
根据你提供的 proxy 配置，Vite 会将请求转发到 http://localhost:7090/api/users，并且会伪装请求来源为 http://localhost:7090（由于 changeOrigin: true 设置）。

请求流程：

**前端开发服务器（http://localhost:1024）**：

你在前端代码中发起请求：

axios.get('/api/users');
这相当于请求 http://localhost:1024/api/users，但是 /api/users 是一个前端请求地址，本身并不处理数据。
代理服务器：

Vite 的代理服务器拦截了这个请求，因为你在配置中指定了 /api 前缀需要代理。
代理服务器将这个请求转发到目标服务器 http://localhost:7090/api/users。
**目标服务器（http://localhost:7090）**：

目标服务器（你的后端 API）接收到请求，处理并返回用户数据（例如一个 JSON 列表）。
返回结果：

目标服务器将结果返回给代理服务器。
代理服务器再将结果返回给前端的开发服务器，最终你在前端页面上看到了用户数据。*/
  server:{
    port:1024,//开发服务器的端口号
    hmr:true,
    proxy:{
      "/api":{//配置代理规则 拦截 以"/api开头的的请求
        target: "http://localhost:7090",// 将 "/api" 的请求 代理到目标服务器
        changeOrigin:true,//改变请求的源头，使目标服务器认为请求是来自代理服务器的
      
      }
    }
  }
})
