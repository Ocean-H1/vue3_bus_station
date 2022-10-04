/**
    @description: 登录组件
    @Author: Ocean
    @date: 2022/10/04

*/
<template>
    <div class="login">
        <div class="title">
            <span>登录</span>
        </div>
        <div class="info">
            如果还未注册，<router-link to="/register" class="link">点击这里注册</router-link>，如果忘记密码,<router-link to="/rebackPsd"
                class="link">点击这里找回密码</router-link>
        </div>
        <!-- 登录的表单 -->
        <el-form :model="loginForm" :rules="loginFormRules" ref="loginFormRef" label-width="100px" label-position="left"
            size="large">
            <el-form-item label="登录名" prop="phone_number">
                <el-input v-model="loginForm.phone_number" placeholder="手机号"></el-input>
            </el-form-item>
            <el-form-item label="密码" prop="password">
                <el-input v-model="loginForm.password" placeholder="密码" type="password" show-password></el-input>
            </el-form-item>
            <el-form-item label="验证码" prop="check_code">
                <Check_code :data="loginForm"></Check_code>
            </el-form-item>

            <el-button type="danger" style="width:180px;" @click="login">登 录</el-button>
        </el-form>
    </div>
</template>

<script setup lang="ts">
import { ElMessage, FormInstance, FormRules } from 'element-plus';
import { reactive, ref } from 'vue';
import Check_code from '../../components/content/check_code.vue';
import _service from '../../service';
import { Md5 } from 'ts-md5'

// 登录表单
const loginForm = reactive({
    phone_number: '',
    password: '',
    check_code: ''
})
const loginFormRules = reactive<FormRules>({
    phone_number: [
        { required: true, message: '请输入手机号', trigger: 'blur' },
        {
            type: 'string',
            pattern: /^(13\d|14[5|7]|15\d|166|17[3|6|7]|18\d)\d{8}$/,
            message: '请输入有效的手机号码',
            trigger: 'blur',
        },
    ],
    password: [{ required: true, message: '请输入密码', trigger: 'blur' }],
    check_code: [
        { required: true, message: '请输入验证码', trigger: 'blur' },
    ],
})
const loginFormRef = ref<FormInstance>()
// 登录
const login = () => {
    loginFormRef.value?.validate(async (valid) => {
        if (!valid) return
        // 用户密码需要进行md5的16小写方式加密传输
        const params = {
            phone_number: loginForm.phone_number,
            password: Md5.hashStr(loginForm.password).substring(8, 24),
            check_code: loginForm.check_code
        }
        const { data: res } = await _service.userLogin(params)

        // 保存返回的SessionId
        window.sessionStorage.setItem('SessionId', res.data.SessionId)
        ElMessage.success({
            message: '登录成功！',
            type: 'success',
            duration: 2000
        })

    })
}
</script>

<style scoped lang="less">
.login {
    width: 100%;
    height: 60vh;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;

    .title {
        width: 30%;
        height: 60px;
        font-size: 1.8rem;
        letter-spacing: 15px;
        font-weight: 600;
        line-height: 60px;
    }

    .info {
        height: 30px;
        width: 35%;
        text-align: right;

        .link {
            text-decoration: none;
            color: crimson;

            &:hover {
                text-decoration: underline;
            }
        }
    }

    .el-form {
        width: 30%;
        display: flex;
        flex-direction: column;

        .el-button {
            letter-spacing: 0.5em;
            font-size: 1.1em;
            text-align: center;
            margin: 0 auto;
        }
    }
}
</style>