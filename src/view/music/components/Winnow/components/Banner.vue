<template>
    <div class="banner">
        <el-space style="width: 100%" fill>
            <el-skeleton class="skelton" animated :count="1" :loading="skeletonLoading">
                <template #template>
                    <div class="skelton-img">
                        <div class="skelton-img1">
                            <el-skeleton-item variant="image" class="skelton-img2" />
                            <el-skeleton-item variant="h3" style="width: 100%; margin-top: 5px;" />
                        </div>
                        <div class="skelton-img1">
                            <el-skeleton-item variant="image" class="skelton-img2" />
                            <el-skeleton-item variant="h3" style="width: 100%; margin-top: 5px;" />
                        </div>
                        <div class="skelton-img1">
                            <el-skeleton-item variant="image" class="skelton-img2" />
                            <el-skeleton-item variant="h3" style="width: 100%; margin-top: 5px;" />
                        </div>
                        <div class="skelton-img1">
                            <el-skeleton-item variant="image" class="skelton-img2" />
                            <el-skeleton-item variant="h3" style="width: 100%; margin-top: 5px;" />
                        </div>
                    </div>
                </template>
                <template #default>
                    <div class="item" v-for="item in randomList(banners, 4)" :key="item.bannerId">
                        <img :src="item.pic" alt="">
                    </div>
                </template>
            </el-skeleton>
        </el-space>
    </div>
</template>

<script setup lang='ts'>
import { onMounted, toRefs } from "vue";
import { useBannerStore } from '@/store/modules/banner'
import { randomList } from "@/utils/index";
import useUserStore from '@/store/modules/user';

const { getBanners } = useBannerStore();
const { banners } = toRefs(useBannerStore());
const { skeletonLoading } = toRefs(useUserStore());

onMounted(async () => {
    await getBanners()
    // console.log('banners---', randomList(banners, 4));
    console.log('banners---', randomList(banners.value, 4));

})

</script>
<style scoped lang="scss">
.banner {
    width: 100%;
    display: flex;

    .item {
        width: 24%;
        margin-right: 1%;

        img {
            width: 100%;
            border-radius: 10px;
        }
    }

    .item:nth-child(4n) {
        margin-right: 0 !important;
    }

    .skelton {
        .skelton-img {
            display: flex;
            width: 100%;

            .skelton-img1 {
                height: 142px;
                width: 24%;
                border-radius: 10px;
                margin-right: 1%;

                .skelton-img2 {
                    height: 135px;
                }
            }
        }
    }
}
</style>