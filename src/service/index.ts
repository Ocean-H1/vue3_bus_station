// 导入初始化之后的axios
import initAxios from './axios'

// 实例化
const Axios = initAxios()

// 统一管理请求
let _service = {
    // 获取车站列表(详情以及经纬度)
    async getStationList() {
        
    }
}

export default _service