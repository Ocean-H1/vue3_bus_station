<!-- 
    @description: 查询车票的组件
    @Author: Ocean
    @date: 2022/08/02
 -->
<template>
    <div class="inquire" style="width: 25vw;">
        <el-tabs type="border-card" class="inquire-tabs">
            <el-tab-pane>
                <!-- tabs头部 -->
                <template #label>
                    <span class="tabs-label">
                        <el-icon :size="14">
                            <search />
                        </el-icon>
                        <span>查询车票</span>
                    </span>
                </template>
                <el-form label-width="100px">
                    <el-form-item label="起始地">
                        <el-input></el-input>
                    </el-form-item>
                    <el-form-item label="目的地">
                        <el-input></el-input>
                    </el-form-item>
                    <el-form-item label="乘车日期">
                        <el-input></el-input>
                    </el-form-item>
                    <el-button color="#068abb">查询</el-button>

                </el-form>
            </el-tab-pane>
            <el-tab-pane>
                <!-- tabs头部 -->
                <template #label>
                    <span class="tabs-label">
                        <el-icon :size="14">
                            <ticket />
                        </el-icon>
                        <span>取票验证码</span>
                    </span>
                </template>
                <el-form label-width="100px">
                   
                    <el-form-item label="手机号">
                        <el-input></el-input>
                    </el-form-item>
                    <el-form-item label="验证码">
                        <el-input></el-input>
                    </el-form-item>
                    <el-button color="#068abb">提交</el-button>

                </el-form>
            </el-tab-pane>

        </el-tabs>
    </div>
</template>

<script setup lang="ts">
import { Search, Ticket } from '@element-plus/icons-vue'
</script>

<style scoped>
.inquire-tabs>.el-tabs__content {
    padding: 32px;
    color: #6b778c;
    font-size: 32px;
    font-weight: 600;
}

.inquire-tabs .tabs-label .el-icon {
    vertical-align: middle;
}

.inquire-tabs .tabs-label span {
    vertical-align: middle;
    margin-left: 4px;
}

.el-form {
    display: flex;
    flex-direction: column;

}
.el-tabs {
  height: 100%;
}
.el-button {
    width: 100%;
    height: 40px;
    letter-spacing: 10px;
    font-size: 1.2em;
    color: #fff;
}

</style>