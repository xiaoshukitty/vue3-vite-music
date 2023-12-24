<template>
    <div class="swiper">
        <el-carousel :interval="2000" type="card" height="250px" trigger="click" :pause-on-hover="false" :autoplay="false">
            <el-carousel-item v-for="item in banners" :key="item.bannerId">
                <img class="swiper_img" :src="item.pic" alt="" @click="playBack(item)">
            </el-carousel-item>
        </el-carousel>
    </div>
</template>

<script setup lang='ts'>
import { onMounted, toRefs } from "vue";
import { useBannerStore } from '@/store/modules/banner'
import { Banner } from "@/api/types/recommended";

const { getBanners } = useBannerStore()
const { banners } = toRefs(useBannerStore())


onMounted(async () => {
    await getBanners()
    // console.log('banners---',banners);
    
})

const playBack = (item: Banner) => {
    console.log('item---', item);
}

</script>
<style lang="scss" scoped>
.swiper {
    margin: 20px 0;

    .el-carousel__item h3 {
        color: #475669;
        opacity: 0.75;
        line-height: 200px;
        margin: 0;
        text-align: center;
    }

    .el-carousel__item:nth-child(2n) {
        background-color: #99a9bf;
    }

    .el-carousel__item:nth-child(2n + 1) {
        // background-color: #d3dce6;
    }

    .swiper_img {
        width: 100%;
        height: 100%;
        cursor: pointer;
        -o-object-fit: cover;
        object-fit: cover;
        transition-property: all;
        transition-timing-function: cubic-bezier(.4, 0, .2, 1);
        transition-duration: .15s;
    }

    ::v-deep .el-carousel__item{
        border-radius: 10px !important;
    }

}
</style>