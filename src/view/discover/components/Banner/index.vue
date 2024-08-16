<template>
    <div class="swiper">
        <el-space style="width: 100%" fill>
            <el-skeleton class="skelton" animated :count="1" :loading="skeletonLoading">
                <template #template>
                    <div class="skelton-carousel">
                        <el-skeleton-item variant="h3" class="skelton-title1" />
                        <el-skeleton-item variant="h3" class="skelton-title2" />
                        <el-skeleton-item variant="h3" class="skelton-title3" />
                    </div>
                </template>
                <template #default>
                    <el-carousel :interval="2000" type="card" height="250px" trigger="click" :pause-on-hover="false"
                        :autoplay="false">
                        <el-carousel-item v-for="item in banners" :key="item.bannerId">
                            <img class="swiper_img" :src="item.pic" alt="" @click="playBack(item)">
                        </el-carousel-item>
                    </el-carousel>
                </template>
            </el-skeleton>
        </el-space>
    </div>
</template>

<script setup lang='ts'>
import { onMounted, toRefs } from "vue";
import { useBannerStore } from '@/store/modules/banner'
import { Banner } from "@/api/types/recommended";
import useUserStore from '@/store/modules/user'

const { getBanners } = useBannerStore()
const { banners } = toRefs(useBannerStore());
const { skeletonLoading } = toRefs(useUserStore())


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

    ::v-deep .el-carousel__item {
        border-radius: 10px !important;
    }


    .skelton-carousel {
        padding-top: 24px;
        display: flex;
        height: 100%;
        position: relative;

        .skelton-title2 {
            position: absolute;
            top: 0;
            left: 405px;
            width: 800px;
            height: 250px;
        }

        .skelton-title1,
        .skelton-title3 {
            width: 100%;
            height: 200px;
        }
    }

}
</style>