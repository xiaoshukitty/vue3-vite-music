<template>
    <div class="recommendationStation">
        <el-space style="width: 100%" fill>
            <el-skeleton class="skelton" animated :count="1" :loading="skeletonLoading">
                <template #template>
                    <el-skeleton-item variant="h3" class="skelton-title" />
                </template>
                <template #default>
                    <Title :title="'推荐电台'" />
                </template>
            </el-skeleton>
            <el-skeleton class="skelton" animated :count="1" :loading="skeletonLoading">
                <template #template>
                    <div class="skelton-img">
                        <div class="skelton-img1" v-for="(item, index) in 6" :key="index">
                            <el-skeleton-item variant="image" class="skelton-img2" />
                            <el-skeleton-item variant="h3" style="width: 100%; margin-top: 5px;" />
                        </div>
                    </div>
                </template>
                <template #default>
                    <div class="list">
                        <div class="item" v-for="item in recommendationStationData" :key="item.id">
                            <PlaylistModule :imgSrc="item.picUrl"></PlaylistModule>
                            <span class="text">{{ item.name }}</span>
                        </div>
                    </div>
                </template>
            </el-skeleton>
        </el-space>
    </div>
</template>

<script setup lang='ts'>
import PlaylistModule from '@/components/common/PlaylistModule/index.vue'
import { toRefs, onMounted } from 'vue';
import { useMusicStore } from '@/store/modules/music';
import useUserStore from '@/store/modules/user';

const { recommendationStationData } = toRefs(useMusicStore());
const { getRecommendationStationData } = useMusicStore();
const { skeletonLoading } = toRefs(useUserStore());


onMounted(async () => {
    await getRecommendationStationData()
})
</script>
<style scoped lang="scss">
.recommendationStation {
    .list {
        width: 100%;
        display: grid;
        grid-template-columns: repeat(6, minmax(0px, 1fr));
        gap: 8px 12px;

        .item {
            // width: 24%;
            // margin-right: 1%;

            img {
                width: 100%;
                // height: 180px;
                border-radius: 10px;
                object-fit: inherit;
            }

            .text {
                width: 100%;
                font-size: .75rem;
            }
        }
    }

    .skelton {
        .skelton-title {
            height: 24px;
            margin: 20px 0 5px;
        }

        .skelton-img {
            width: 100%;
            display: grid;
            grid-template-columns: repeat(6, minmax(0px, 1fr));
            gap: 8px 12px;

            .skelton-img2 {
                height: 250px;
            }

        }
    }
}
</style>
