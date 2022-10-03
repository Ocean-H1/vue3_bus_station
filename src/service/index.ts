// 导入初始化之后的axios
import initAxios from './axios'
// 实例化
const Axios = initAxios()

// 统一管理请求

const _service = {
    // 获取所有地区列表
    getAllRegions() {
        return Axios({
            url: '/query/region/getAllRegions',
            method: 'GET',
        })
    },
    // 查询符合条件的线路列表
    getShuttleList(params: shuttleListParams) {
        return Axios({
            url: '/query/shuttle/getShuttleList',
            method: 'GET',
            params,
        })
    },
    // 获取验证码图片
    getCheckCodePicture() {
        return Axios({
            url: '/permissions/getCheckCodePicture',
            method: 'GET',
            responseType: 'blob'
        })
    },
    // 发送乘车码到手机接口
    sendRideCode(params:senRideCode) {
        return Axios({
            url: '/query/rideCode/sendRideCode',
            method: 'GET',
            params
        })
    }
}
export default _service