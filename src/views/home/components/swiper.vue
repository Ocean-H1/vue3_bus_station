<template>
    <div class="swiper">
        <!-- 动态将轮播图的容器高度设置成与图片一致 -->
        <el-carousel trigger="click">
            <el-carousel-item v-for="item in swiperImg" :key="item">
                <img :src="item" alt="" style="height: 100%" />
            </el-carousel-item>
        </el-carousel>
    </div>
</template>

<script setup lang="ts">
const swiperImg = [
    'https://image.scqckypw.com/media/upload/images/chuanyu.jpg',
    'https://image.scqckypw.com/media/upload/images/dangshi.jpg',
    'https://image.scqckypw.com/media/upload/images/chuxing.jpg',
    'https://image.scqckypw.com/media/upload/images/bingduyufang20210425094029.jpg',
    'https://image.scqckypw.com/media/upload/images/111120180312133951.jpg',
]

</script>

<style scoped>
.el-carousel {
  height: 100%;
}
</style>