import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
//引入path会飘红，因为缺少关于node的ts声明配置  ==>  npm i -D @types/node
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve:{
    alias:{
      // 别名替换
      "@":path.resolve(__dirname,'./src')  //从左往右拼接，获取从__dirname当前目录（=vite.config.ts）开始的src目录的绝对路径,join()比起来更加无脑，除了../其他都无脑拼接
    }
  }
})
