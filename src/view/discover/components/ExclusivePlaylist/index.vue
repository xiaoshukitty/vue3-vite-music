<template>
    <div class="exclusive_playlist">
        <el-space style="width: 100%" fill>
            <el-skeleton class="skelton" animated :count="1" :loading="skeletonLoading">
                <template #template>
                    <el-skeleton-item variant="h3" class="skelton-title" />
                </template>
                <template #default>
                    <Title :title="'专属歌单'" />
                </template>
            </el-skeleton>
            <el-skeleton class="skelton" animated :count="10" :loading="skeletonLoading">
                <template #template>
                    <div class="skelton-list">
                        <el-skeleton-item variant="image" style="height: 300px" />
                        <div style="margin-top: 10px;">
                            <el-skeleton-item variant="h3" style="width: 70%;" />
                        </div>
                    </div>
                </template>
                <template #default>
                    <div class="block">
                        <div class="block_list" v-for="(item, index) in exclusivePlaylistData" :key="index">
                            <div class="block_item" @click="goToPlayList(item)">
                                <PlaylistModule :imgSrc="item.picUrl"></PlaylistModule>
                            </div>
                            <div class="text">{{ item.name }}</div>
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
import { useMusicStore } from '@/store/modules/music';
import useUserStore from '@/store/modules/user';
import { useRouter } from "vue-router";

const { exclusivePlaylistData } = toRefs(useMusicStore());
const { skeletonLoading } = toRefs(useUserStore());
const { getExclusivePlaylistData } = useMusicStore()

const router = useRouter();//倒入路由模块

//跳转歌单页面
const goToPlayList = (item: object) => {
    console.log(item);
    router.push({
        path: '/playList',
        query: {
            id: item.id
        }
    })
}

onMounted(async () => {
    await getExclusivePlaylistData();
})


</script>
<style lang="scss" scoped>
.exclusive_playlist {
    h2 {
        font-size: 24px;
        margin: 20px 0;
    }

    .block {
        width: 100%;
        display: grid;
        grid-template-columns: repeat(5, minmax(0px, 1fr));
        gap: 8px 12px;

        .block_list {

            .block_item {
                width: 100%;

                img {
                    width: 100%;
                    border-radius: 10px;
                }
            }

            .text {
                margin: 5px 0 10px;
                font-size: 14px;
            }


        }

        .block_list:nth-child(5n) {
            margin-right: 0 !important;
        }

    }

    .skelton {
        display: grid;
        gap: 8px 12px;
        width: 100%;
        grid-template-columns: repeat(5, minmax(0px, 1fr));
        border-radius: 10px;

    }

    .skelton-title {
        width: 50%;
        height: 24px;
        margin: 20px 0;
    }
}
</style>