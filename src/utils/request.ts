import axios, { AxiosResponse } from "axios";
import type { AxiosInstance, AxiosRequestConfig ,InternalAxiosRequestConfig } from 'axios'

class Request {
    instance: AxiosInstance
    baseConfig: AxiosRequestConfig = { baseURL: "https://mock.mengxuegu.com/mock/640834097c016026ff2b9c61/example", timeout: 60000 };
    constructor(config?: AxiosRequestConfig) {

        this.instance = axios.create(Object.assign(this.baseConfig,config)) //创建实例
        // 请求拦截器
        this.instance.interceptors.request.use((config:InternalAxiosRequestConfig)=>{
            // 判断token是否存在放入headers
            return config
        },
        (err:any)=>{
            console.log(err,'=>收集请求报错信息')
        }
        )
        // 响应拦截器
        this.instance.interceptors.response.use((response:AxiosResponse)=>{
            return response.data
        },
        (err:any)=>{
            // 可以获取到失败状态码进行全局提示
            console.log(err,'=>收集响应报错信息')
            return Promise.reject(err.response)
        }
        )
        
    }
    public request(config:AxiosRequestConfig){
        return this.instance.request(config)
    }
}
export default new Request()