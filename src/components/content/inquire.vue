 /**
    @description: 查询车票的组件
    @Author: Ocean
    @date: 2022/10/02
 */
<template>
    <el-tabs type="border-card" class="inquire">
        <!-- 查询车票的表单 -->
        <el-tab-pane>
            <template #label>
                <span class="tabs-label">
                    <el-icon>
                        <Search />
                    </el-icon>
                    <span>查询车票</span>
                </span>
            </template>
            <el-form :model="queryForm" ref="queryFormRef" :rules="queryRules" label-width="100px" label-position="left"
                size="large">
                <el-form-item label="起始地" prop="start_region_name">
                    <el-autocomplete v-model="queryForm.start_region_name" placeholder="请选择起始地" @select="start_Select"
                        clearable value-key="city_name" :fetch-suggestions="querySearch" :debounce="300"
                        highlight-first-item>
                        <template #default="{item}">
                            <div class="city_name">{{item.city_name}}市:</div>
                            <span class="region_name">{{item.region_name}} </span>
                        </template>
                        <template #append>
                            区/县
                        </template>
                    </el-autocomplete>
                </el-form-item>
                <el-form-item label="目的地" prop="final_region_name">
                    <el-autocomplete v-model="queryForm.final_region_name" placeholder="请选择目的地" @select="final_Select"
                        clearable value-key="city_name" :fetch-suggestions="querySearch" :debounce="300"
                        highlight-first-item>
                        <template #default="{item}">
                            <div class="city_name">{{item.city_name}}市:</div>
                            <span class="region_name">{{item.region_name}} </span>
                        </template>
                        <template #append>
                            区/县
                        </template>
                    </el-autocomplete>
                </el-form-item>
                <el-form-item label="乘车日期" prop="shuttle_shift_date">
                    <el-date-picker v-model="queryForm.shuttle_shift_date" type="date" placeholder="请选择乘车日期"
                        format="YYYY年MM月DD日" value-format="YYYY-MM-DD" />
                </el-form-item>

                <el-button type="primary" :icon="Search" color="#068abb" size="large" @click="queryShuttleList">查 询
                </el-button>

            </el-form>
        </el-tab-pane>
        <!-- 取票码的表单 -->
        <el-tab-pane>
            <template #label>
                <span class=" tabs-label">
                    <el-icon>
                        <Ticket />
                    </el-icon>
                    <span>取票验证码</span>
                </span>
            </template>
            <el-form :model="ticketForm" ref="ticketFormRef" :rules="ticketFormRules" label-width="100px"
                label-position="left" size="large">
                <el-form-item label="手机号" prop="phone_number">
                    <el-input v-model="ticketForm.phone_number" placeholder="请输入手机号" clearable></el-input>
                </el-form-item>
                <el-form-item label="验证码" prop="check_code">
                    <CheckCode :data="ticketForm"></CheckCode>
                </el-form-item>
                <el-button type="primary" color="#068abb" size="large" @click="sendRideCode">发 送</el-button>

            </el-form>
        </el-tab-pane>
    </el-tabs>

</template>

<script setup lang="ts">
import { Search, Ticket } from '@element-plus/icons-vue';
import { onMounted, reactive, ref } from 'vue';
import { ElMessage } from 'element-plus'
import type { FormInstance, FormRules } from 'element-plus'
import _service from '../../service';
import CheckCode from './check_code.vue'

// 所有地区列表
const regionsList = reactive<RegionsList[]>([])
const regionsNameList = reactive<string[]>([])
// 加载地区列表(用于输入建议)
const loadAllRegions = async () => {
    const { data: res } = await _service.getAllRegions()
    // 保存数据
    regionsList.push(...res.data.region_list)
}
// 查询线路表单
const queryForm = reactive({
    start_region_name: '',
    final_region_name: '',
    start_region_id: 0,
    final_region_id: 0,
    shuttle_shift_date: ''
})
const queryFormRef = ref<FormInstance>()
// 自定义 起始/目的地 的验证规则
const validCity = (rule: any, value: any, callback: any) => {
    // 造出一个只有城市名的数组regionsNameList
    regionsList.forEach((item: RegionsList) => {
        regionsNameList.push(item.region_name)
    })
    if (regionsNameList.some(name => name === value)) {
        callback()
    } else {
        callback(new Error('请选择列表中已有城市!'))
    }
}
const queryRules = reactive<FormRules>({
    start_region_name: [
        { required: true, message: '请输入起始地', trigger: 'blur' },
        {
            message: '请输入有效的城市!',
            trigger: 'change',
            validator: validCity
        },
    ],
    final_region_name: [
        { required: true, message: '请输入起始地', trigger: 'blur' },
        {
            message: '请输入有效的城市!',
            trigger: 'change',
            validator: validCity
        },
    ],
    shuttle_shift_date: [
        { required: true, message: '请选择乘车日期', trigger: 'blur && change' },
    ]
})
// 输入建议的选择事件
const start_Select = (item: any) => {
    queryForm.start_region_name = item.region_name
    queryForm.start_region_id = item.region_id
}
const final_Select = (item: any) => {
    queryForm.final_region_name = item.region_name
    queryForm.final_region_id = item.region_id
}
// 查找输入建议
const querySearch = (queryString: string, cb: (results: RegionsList[]) => void) => {
    const results: RegionsList[] = queryString ? regionsList.filter(createFilter(queryString)) : regionsList
    // 传给callback之前，可以数据结构处理为树形结构(省->市->区)再展示，但自己觉得这项工作在后端完成比较好，只是一种方案
    cb(results)
}
const createFilter = (queryString: string) => {
    return (regionsList: RegionsList) => {
        return (
            regionsList.region_name.toLowerCase().indexOf(queryString.toLowerCase()) >= 0 || regionsList.region_english_name.toLowerCase().indexOf(queryString.toLowerCase()) >= 0
        )
    }
}
// 查询符合条件的线路列表
const queryShuttleList = () => {
    // 调用表单验证
    queryFormRef.value?.validate(async (valid) => {
        if (!valid) return
        // 参数预处理
        const params = {
            start_region_id: queryForm.start_region_id,
            final_region_id: queryForm.final_region_id,
            shuttle_shift_date: queryForm.shuttle_shift_date
        }
        const { data: res } = await _service.getShuttleList(params)
        // 传递/保存结果 跳转路由
        console.log(`符合条件的线路`, res.data);

        // ...
    })
}
//  乘车码表单
const ticketForm = reactive({
    phone_number: '',
    check_code: ''
})
const ticketFormRef = ref<FormInstance>()
const ticketFormRules = reactive<FormRules>({
    phone_number: [
        { required: true, message: '请输入手机号', trigger: 'blur' },
        {
            type: 'string',
            pattern: /^(13\d|14[5|7]|15\d|166|17[3|6|7]|18\d)\d{8}$/,
            message: '请输入有效的手机号码',
            trigger: 'blur',
        },
    ],
    check_code: [
        { required: true, message: '请输入验证码', trigger: 'blur' },
    ],
})
// 发送乘车码
const sendRideCode = () => {
    ticketFormRef.value?.validate(async (valid) => {
        if (!valid) return
        const { data: res } = await _service.sendRideCode(ticketForm)
        // 请求发送成功 重置表单
        ElMessage.success('发送成功，请注意查收！')
        ticketFormRef.value?.resetFields()
    })

}
onMounted(() => {
    // 加载地区列表
    loadAllRegions()
})
</script>

<style scoped lang="less">
.tabs-label {
    .el-icon {
        vertical-align: middle;
    }

    span {
        vertical-align: middle;
        margin-left: 4px;
    }
}

.city_name {
    font-weight: 600;
    width: 50%;
    float: left;
    font-size: 16px !important;
}

.region_name {
    width: 50%;
    float: left;
    letter-spacing: 3px;
}

.el-form {
    display: flex;
    flex-direction: column;
}

.el-button {
    letter-spacing: 0.5em;
    font-size: 1.1em;
    text-align: center;
}
</style>