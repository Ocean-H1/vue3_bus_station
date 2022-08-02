import axios from 'axios'

// 初始化
const initAxios = axios.create({
    baseURL: 'http://stationapi.oceanh.top:8080',
    timeout: 1800000
})

// 设置请求拦截器

// 设置响应拦截器


export default () => {
    return initAxios
}
