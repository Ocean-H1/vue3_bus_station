<template>
  <div class="stationBox">
    <!-- 标题 -->
    <div class="title">
      <div>车站介绍</div>
      <div class="moreStation">
        更多车站 <i class="el-icon-d-arrow-right"></i>
      </div>
    </div>
    <!-- 车站列表 -->
    <div class="stationList">
      <el-table :data="stationList2" style="width: 50%" size="medium" stripe :show-header="false">
        <el-table-column>
          <template #default="scope">
            <span class="staInfo">{{
                scope.row.station_name
            }}</span>
          </template>
        </el-table-column>
      </el-table>
      <el-table :data="stationList1" style="width: 50%" size="medium" stripe :show-header="false">
        <el-table-column>
          <template #default="scope">
            <span class="staInfo">{{
                scope.row.station_name
            }}</span>
          </template>
        </el-table-column>
      </el-table>
    </div>
  </div>
</template>

<script setup lang="ts">
import { reactive } from 'vue';
import _service from '../../../service/index.js';
const stationList1 = reactive([])
const stationList2 = reactive([])


</script>

<style scoped>
.stationBox {
  display: flex;
  flex-direction: column;
}

.title,
.stationList {
  width: 100%;
}

.title {
  background-color: #068abb;
}

.title div {
  width: 50%;
  float: left;
  font-size: 1.2rem;
  cursor: pointer;
  padding: 0.6rem;
  color: #fff;
}

.moreStation:hover {
  text-decoration: underline;
}

.el-table {
  float: right !important;
}

.staInfo:hover {
  font-weight: 600;
  text-decoration: underline;
  cursor: pointer;
}
</style>
