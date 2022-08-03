<template>
    <div class="homeMenu">
        <el-menu :default-active="$route.path" mode="horizontal" router background-color="#d3e5f1" :ellipsis="false">
            <el-menu-item index="/layout/home">首页</el-menu-item>
            <el-menu-item index="/layout/refund">退票</el-menu-item>
            <el-menu-item index="/layout/help">帮助中心</el-menu-item>
            <el-menu-item index="/layout/advise">投诉建议</el-menu-item>
            <!-- 根据用户权限显示 -->
            <el-sub-menu index="/">
                <template #title>后台管理</template>
                <el-menu-item index="/shiftModule">班次管理</el-menu-item>
                <el-menu-item index="/ticketModule">票务管理</el-menu-item>
            </el-sub-menu>
            <el-menu-item index="/about">关于我们</el-menu-item>
        </el-menu>
        <router-view></router-view>
    </div>
</template>

<script setup lang="ts">

</script>

<style scoped>
/* 子节点激活样式 */
.homeMenu>.el-menu>.el-menu-item.is-active {
    background-color: #068abb !important;
    border-bottom: 3px solid #f6cc58;
    color: #fff !important;
    font-weight: 600;
}

/*  一级菜单颜色 */
/* ::v-deep .el-sub-menu .el-sub-menu__title:hover {
    color: #fff;
	background-color: #068abb !important;
} */
:deep(.el-sub-menu .el-sub-menu__title:hover){
    color: #fff;
	background-color: #068abb !important;
}
:deep( .el-sub-menu .el-sub-menu__title) {
    font-size: 1.2rem;
    letter-spacing: 3px;
}

/* 有二级菜单的标题及子菜单菜单字体颜色 */
.el-menu--horizontal .el-menu .el-menu-item,
.el-menu--horizontal .el-menu .el-sub-menu__title {
    color: #909399;
}
/* 二级菜单hover状态下字体颜色 */
.el-menu--horizontal .el-menu-item:not(.is-disabled):focus,
.el-menu--horizontal .el-menu-item:not(.is-disabled):hover {
    background-color: #068abb !important;
	color: #fff  !important;
    font-weight: 600;
}
.homeMenu> .el-menu--horizontal .el-menu-item:not(.is-disabled) {
    flex: 1;
    font-size: 1.2rem;
    letter-spacing: 3px;
}
</style>