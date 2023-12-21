<template>
    <div class="recommendationStation">
        <Title :title="'推荐电台'" />
        <div class="list">
            <div class="item" v-for="item in recommendationStationData" :key="item.id">
                <img :src="item.picUrl" alt="">
                <span class="text">{{ item.name }}</span>
            </div>
        </div>
    </div>
</template>

<script setup lang='ts'>
import { toRefs, onMounted } from 'vue'
import { useMusicStore } from '@/store/modules/music'

const { recommendationStationData } = toRefs(useMusicStore())
const { getRecommendationStationData } = useMusicStore()


onMounted(async () => {
    await getRecommendationStationData()
})
</script>
<style scoped lang="scss">
.recommendationStation {
    .list {
        width: 100%;
        display: flex;

        .item {
            width: 24%;
            margin-right: 1%;

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
}
</style>
