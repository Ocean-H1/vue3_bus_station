// 地区列表的数据接口定义
interface RegionsList {
    region_id: number,
    region_name: string,
    region_english_name: string,
    city_name: string,
    province_name: string
}
// 查询符合条件的线路列表参数定义
interface shuttleListParams {
    start_region_id: number,
    final_region_id: number,
    shuttle_shift_date:string,
}
// 发送乘车码接口的参数定义
interface senRideCodeParams {
    phone_number:string,
    check_code: string
}
// 登录
interface loginParams {
    phone_number:string,
    check_code: string,
    password: string
}