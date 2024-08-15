<template>
    <div class="RecommendedMusic">
        <el-space style="width: 100%" fill>
            <el-skeleton class="skelton" animated :count="1" :loading="skeletonLoading">
                <template #template>
                    <el-skeleton-item variant="h3" class="skelton-title" />
                </template>
                <template #default>
                    <Title :title="'推荐新音乐'" />
                </template>
            </el-skeleton>
            <el-skeleton class="skelton" animated :count="10" :loading="skeletonLoading">
                <template #template>
                    <div class="skelton-list">
                        <div class="skelton-img">
                            <el-skeleton-item variant="image" class="skelton-img" />
                        </div>
                        <div class="skelton-text">
                            <el-skeleton-item variant="h3" style="width: 70%;" />
                            <el-skeleton-item variant="h3" style="width: 70%;" />
                        </div>
                    </div>
                </template>
                <template #default>
                    <div class="music_list">
                        <div class="music_item" v-for="item in recommendedMusicData" :key="item.id"
                            @dblclick="playMusic(item.id)">
                            <img :src="item.picUrl" alt="">
                            <div class="music_item_right">
                                <div>{{ item.name }}</div>
                                <div>{{ item.song.artists[0].name }}</div>
                            </div>
                        </div>
                    </div>
                </template>
            </el-skeleton>
        </el-space>

    </div>
</template>

<script setup lang='ts'>
import { toRefs, onMounted } from 'vue'
import Title from '@/components/common/Title/index.vue'
import { useMusicStore } from '@/store/modules/music'
import { usePlaySong } from '@/store/modules/playSong'

const { recommendedMusicData, skeletonLoading } = toRefs(useMusicStore())
const { getRecommendedMusicData } = useMusicStore()
const { playMusic } = usePlaySong()

onMounted(async () => {
    await getRecommendedMusicData();
})

</script>
<style lang="scss" scoped>
.RecommendedMusic {
    .music_list {
        display: flex;
        flex-wrap: wrap;
        font-size: .75rem;

        .music_item {
            cursor: pointer;
            width: 19%;
            height: 50px;
            margin-bottom: 10px;
            border-radius: 5px;
            margin-right: 1.25%;
            display: flex;

            img {
                height: 50px;
                border-radius: 5px;
            }

            .music_item_right {
                margin-left: 10px;
                display: flex;
                flex-direction: column;
                justify-content: space-evenly;

                & div:nth-child(2) {
                    color: rgb(148 163 184);
                }
            }
        }

        .music_item:hover {
            background-color: #f5f5f4;
        }

        .music_item:nth-child(5n) {
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

    .skelton-list {
        display: flex;

        .skelton-img {
            width: 50px;
            height: 50px;
            border-radius: 5px;
        }

        .skelton-text {
            width: 100%;
            margin-left: 10px;
            display: flex;
            flex-direction: column;
            justify-content: space-evenly;
        }
    }
}
</style>