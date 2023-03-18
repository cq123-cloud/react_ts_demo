import axios from 'axios'
import type { InternalAxiosRequestConfig, AxiosResponse } from 'axios'

if (process.env.NODE_ENV === 'development') {
    axios.defaults.baseURL = 'http://dev.xxx.com'
} else if (process.env.NODE_ENV === 'production') {
    axios.defaults.baseURL = 'http://prod.xxx.com'
}
const baseUrl = ''
// 创建axios实例
const service = axios.create({
    baseURL: baseUrl,
    timeout: 5000, // 请求超时时间
    headers: {
        // "Content-Type": "application/json;charset=UTF-8"
        "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8"
        // "Content-Type":
        //   "multipart/form-data;boundary=----WebKitFormBoundaryFGcLCSJPwmVVo4lK"
    },
    withCredentials: true,
});

// 请求拦截器
axios.interceptors.request.use(
    (config: InternalAxiosRequestConfig) => {
        // 每次发送请求之前判断是否存在token
        // 如果存在，则统一在http请求的header都加上token，这样后台根据token判断你的登录情况，此处token一般是用户完成登录后储存到localstorage里的
        // token && (config.headers.Authorization = token)
        return config
    },
    error => {
        return Promise.reject(error)
    })

// 响应拦截器
axios.interceptors.response.use((response: AxiosResponse) => {
    // 如果返回的状态码为200，说明接口请求成功，可以正常拿到数据
    // 否则的话抛出错误
    // if (response.status === 200) {
    //     if (response.data.code === 511) {
    //         // 未授权调取授权接口
    //     } else if (response.data.code === 510) {
    //         // 未登录跳转登录页
    //     } else {
    //         return response
    //     }
    // } else {
    //     return response
    // }
    return response
}, (error: any) => {
    // 我们可以在这里对异常状态作统一处理
    if (error.response.status) {
        // 处理请求失败的情况
        // 对不同返回码对相应处理
        return Promise.reject(error.response)
    }
})