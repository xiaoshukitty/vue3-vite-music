<template>
    <div class="mv">
        <Title :title="'推荐MV'" />
        <div class=mv_list>
            <div class="mv_item" v-for="item in recommendedMvData" :key="item.id">
                <img :src="item.picUrl" alt="">
                <div>{{ item.name }}</div>
                <div>{{ item.artistName }}</div>
            </div>
        </div>
    </div>
</template>

<script setup lang='ts'>
import Title from '@/components/common/Title/index.vue'

import { onMounted, toRefs } from 'vue'
import { useMusicStore } from '@/store/modules/music'

const { recommendedMvData } = toRefs(useMusicStore())
const { getRecommendedMvData } = useMusicStore()


onMounted(async () => {
    console.log('recommendedMvData---', recommendedMvData);

    await getRecommendedMvData();
})
</script>
<style scoped lang="scss">
.mv {
    font-size: .75rem;

    .mv_list {
        display: flex;

        .mv_item {
            width: 24%;
            height: 200px;
            margin-right: 1%;

            img {
                width: 100%;
            }

            & div:nth-child(3) {
                font-size: 80%;
                color: rgb(148, 163, 184);
                margin-top: 5px;
            }
        }

        .mv_item:nth-child(4n) {
            margin-right: 0;
        }
    }
}
</style>