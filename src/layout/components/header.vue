<template>
    <div class="homeHeader">
        <el-row :gutter="20">
            <el-col :span="6">
                <div class="grid-content logo">
                    <img src="@/assets/img/logo.png" alt="" width="40" />
                </div>
            </el-col>
            <el-col :span="12">
                <div class="grid-content title">陕西省客运互联网售票平台</div>
            </el-col>
            <!-- 用户未登录时显示 -->
            <el-col :span="6" class="user">
                <div class="grid-content login">登录</div>
                <div class="grid-content register">
                    注册
                </div>
            </el-col>
            <!-- 用户已登录时显示 -->
            <!-- <el-col :span="6" class="user" v-else>
                <div class="grid-content profile">
                    个人中心
                </div>
                <div class="grid-content logout">退出</div>
            </el-col> -->
        </el-row>
    </div>
</template>

<script setup lang="ts">

</script>

<style scoped>
.homeHeader,
.el-row,
.el-col {
    height: 100%;
}

.grid-content {
    height: 100%;
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;
}

.title {
    font-size: 2em;
    letter-spacing: 0.5em;
    font-weight: 600;
}

.login,
.register,
.profile,
.logout {
    cursor: pointer;
    letter-spacing: 3px;
    width: 50%;
}

.login:hover,
.register:hover,
.profile:hover,
.logout:hover {
    text-decoration: underline;
}

.user {
    display: flex;
    flex-direction: row;
}
</style>