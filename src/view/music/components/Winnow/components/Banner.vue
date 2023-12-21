<template>
    <div class="banner">
        <div class="item" v-for="item in randomList(banners, 4)" :key="item.bannerId">
            <img :src="item.pic" alt="">
        </div>
    </div>
</template>

<script setup lang='ts'>
import { onMounted, toRefs } from "vue";
import { useBannerStore } from '@/store/modules/banner'
import { randomList } from "@/utils/index";

const { getBanners } = useBannerStore()
const { banners } = toRefs(useBannerStore())


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
}
</style>