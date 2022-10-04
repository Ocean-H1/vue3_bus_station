/**
    @description: 图片验证码组件
    @Author: Ocean
    @date: 2022/10/04
*/
<template>
    <div class="check_code">
        <el-input v-model="data.check_code" placeholder="点击图片刷新" @focus="refreshCodeImg"></el-input>
        <img :src="codeImgUrl" alt="图片验证码" width="150" class="codeImage" @click="refreshCodeImg">
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import _service from '../../service'
defineProps<{
    data: senRideCodeParams
}>()
// 图片验证码URL
let codeImgUrl = ref<string>('https://image.scqckypw.com/static/new/images/refreshen.png')
// 刷新图片验证码
const refreshCodeImg = async () => {
    const res = await _service.getCheckCodePicture()
    // 将后台返回的图片的二进制流转换
    const imgBlob = new window.Blob([res.data], { type: 'image/png' })
    codeImgUrl.value = window.URL.createObjectURL(imgBlob)

    // 保存sessionId 供 登录接口
    window.sessionStorage.setItem('SessionId', res.headers['session-id'])
}
</script>

<style scoped lang="less">
.check_code {
    display: flex;
    flex-direction: row;
    
    .codeImage{
        cursor: pointer;
    }
}
</style>