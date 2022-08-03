<template>
    <div class="home">
        <!-- 第一部分  查询  轮播图  公告 -->
        <div class="first-container">
            <Inquire></Inquire>
            <Swiper></Swiper>
            <Notice></Notice>
        </div>
        <!-- 流程图 -->
        <div class="process">
            <Process></Process>
        </div>
        <!-- 热门线路 和 车站介绍 -->
        <div class="footer-container">
            <!-- 车站介绍 -->
            <div class="footer-station">
                <StationBox></StationBox>
            </div>
            <!-- 热门线路 -->
            <div class="footer-hotLine">

            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import Inquire from '../../components/content/inquire.vue';
import Swiper from './components/swiper.vue';
import Notice from './components/notice.vue';
import Process from './components/process.vue';
import StationBox from './components/stationBox.vue';

</script>

<style scoped>
.first-container {
    display: flex;
    justify-content: space-between;
    max-height: 300px;
    margin: 3vh 0 3vh 0;
}

.HomeNotice {
    width: 25vw;
}

.swiper {
    width: 36vw;
}

.inquire {
    width: 25vw;
}
.process {
  margin: 5vh 0 2vh 0;
}
.footer-container {
    width: 100%;
    display: flex;
    justify-content: space-between;
    margin: 5vh 0 5vh 0;
    height: 67vh;
    overflow: hidden;
}

.footer-station,
.footer-hotLine {
    width: 48%;
}
</style>