import axios from 'axios'
import { ElMessage } from "element-plus";
// 初始化
const initAxios = axios.create({
    baseURL: 'http://stationapi.oceanh.top:8080',
    timeout: 1800000
})

// 设置请求拦截器
initAxios.interceptors.request.use(config => {

    // 添加SessionId到请求头中
    config.headers && (config.headers.SessionId = window.sessionStorage.getItem('SessionId') as string)
    return config
})
// 设置响应拦截器
initAxios.interceptors.response.use(res => {
    // 处理响应失败时的情况
    if (res.data.code && res.data.code !== 10000) {
        ElMessage.error(res.data.message)
    }
    return res
})

export default () => {
    return initAxios
}
