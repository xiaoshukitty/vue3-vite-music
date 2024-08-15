<template>
    <div class="mv">
        <el-space style="width: 100%" fill>
            <el-skeleton animated :count="1" :loading="skeletonLoading">
                <template #template>
                    <el-skeleton-item variant="h3" class="skelton-title" />
                </template>
                <template #default>
                    <Title :title="'推荐MV'" />
                </template>
            </el-skeleton>
            <el-skeleton class="skelton" animated :count="2" :loading="skeletonLoading">
                <template #template>
                    <div class="skelton-list">
                        <el-skeleton-item variant="image" style="height: 210px;border-radius: 10px" />
                        <div style="margin-top: 10px; display: flex;flex-direction: column;">
                            <el-skeleton-item variant="h3" style="width: 100%;" />
                            <el-skeleton-item variant="h3" style="width: 100%; margin-top: 5px;" />
                        </div>
                    </div>
                </template>
                <template #default>
                    <div class=mv_list>
                        <div class="mv_item" v-for="item in recommendedMvData" :key="item.id"
                            @click.stop="goToBack('mvDetail', item.id)">
                            <PlaylistModule :imgSrc="item.picUrl"></PlaylistModule>
                            <div>{{ item.name }}</div>
                            <div>{{ item.artistName }}</div>
                        </div>
                    </div>
                </template>
            </el-skeleton>
        </el-space>
    </div>
</template>

<script setup lang='ts'>
import Title from '@/components/common/Title/index.vue'
import PlaylistModule from '@/components/common/PlaylistModule/index.vue'

import { onMounted, toRefs } from 'vue'
import { useMusicStore } from '@/store/modules/music'
import { useRouter } from "vue-router";

const router = useRouter()
const { recommendedMvData ,skeletonLoading} = toRefs(useMusicStore())
const { getRecommendedMvData } = useMusicStore()

const goToBack = (name: string, id: number) => {
    router.push({ path: name, query: { id: id } })
}

onMounted(async () => {
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

    .skelton {
        display: grid;
        gap: 8px 12px;
        width: 100%;
        grid-template-columns: repeat(4, minmax(0px, 1fr));
        border-radius: 10px;

    }

    .skelton-title {
        width: 10%;
        height: 24px;
        margin: 20px 0;
    }
}
</style>