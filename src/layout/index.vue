/**
    @description: app的主要布局
    @Author: Ocean
    @date: 2022/08/02
*/
<template>
    <div>
        <el-container>
            <!-- 头部 -->
            <el-header>
                <homeHeader></homeHeader>
            </el-header>
            <!-- 内容 -->
            <el-main>
                <Menu></Menu>
            </el-main>
            <!-- 底部 -->
            <el-footer>
                <Footer></Footer>
                <!-- 备案信息 -->
                <div class="beian">
                    <a href="https://beian.miit.gov.cn" target="_blank">陕ICP备19006814号-1</a>
                </div>
            </el-footer>
        </el-container>
    </div>
</template>

<script setup lang="ts">
import homeHeader from './components/header.vue';
import Menu from './components/menu.vue';
import Footer from './components/footer.vue';

</script>

<style scoped>
.el-main,
.el-header,
.el-footer {
    padding: 0;
    margin: 0;
}

.el-header {
    background-color: #068abb;
    box-shadow: 0 6px 4px 5px rgb(0 0 0 / 5%);
    color: #fff;
}

.el-main {
    width: 90vw;
    margin: 5vh auto 0 auto;
}

.el-footer {
    width: 90vw;
    margin: 5vh auto;
}

.beian {
    width: 200px;
    height: 60px;
    line-height: 60px;
    margin: 0 auto;
}

.beian a:visited {
    color: cornflowerblue;
}
</style>