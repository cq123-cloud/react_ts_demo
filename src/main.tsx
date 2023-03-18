import React from 'react'
import ReactDOM from 'react-dom/client'
import "reset-css"  //样式初始化在前面,后面样式会覆盖前面
// import 'antd/dist/antd.css'
import '@/assets/styles/global.scss'
import '@/styles/content.scss'
import App from './App'
import { BrowserRouter } from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
)
