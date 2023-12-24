<template>
    <div class="RecommendedMusic">
        <Title :title="'推荐新音乐'" />
        <div class="music_list">
            <div class="music_item" v-for="item in recommendedMusicData" :key="item.id" @dblclick="playMusic(item.id)">
                <img :src="item.picUrl" alt="">
                <div class="music_item_right">
                    <div>{{ item.name }}</div>
                    <div>{{ item.song.artists[0].name }}</div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang='ts'>
import { toRefs, onMounted } from 'vue'
import Title from '@/components/common/Title/index.vue'
import { useMusicStore } from '@/store/modules/music'
import { usePlaySong } from '@/store/modules/playSong'

const { recommendedMusicData } = toRefs(useMusicStore())
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
}
</style>