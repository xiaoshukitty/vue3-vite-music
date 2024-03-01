<template>
    <div class="song_list_box">
        <el-row class="fs14 mt20">
            <el-col :span="12">歌曲</el-col>
            <el-col :span="5">歌手</el-col>
            <el-col :span="5">专辑</el-col>
            <el-col :span="2">时长</el-col>
        </el-row>
        <div class="song_list">
            <el-row class="h50 song_info" v-for="(item, index) in songsList.slice(0, pageSize * page)" :key="index"
                @dblclick="playMusic(item.id)" :class="{ 'playing': id === item.id }">
                <el-col class="music_song lh50" :span="12">
                    <div class="df">
                        <div class="music_mv">
                            <div>{{ item.name }}</div>
                            <div style="display: flex; margin-left:5px;">
                                <!-- <el-icon class="mv_hover" :size="20" color="#000" @click.stop="playMv(item.id)">
                                    <VideoCamera />
                                </el-icon> -->
                            </div>
                        </div>
                        <div style="display: flex; align-items: center;">
                            <el-icon class="icon" :size="20" color="#fff" @click.stop="playMusic(item.id)">
                                <CaretRight />
                            </el-icon>
                        </div>
                    </div>
                </el-col>
                <el-col class="collection lh50" :span="5">{{ item.ar[0].name }}</el-col>
                <el-col class="collection lh50" :span="5">{{ item.al.name }}</el-col>
                <el-col class="duration lh50" :span="2">{{ convertToHMS(item.dt / 1000) }}</el-col>
            </el-row>
        </div>
        <div class="loading_btn" v-if="songsList.length > 0 && pageSize && !noMore">
            <el-button type="success" link @click="loadMore">加载更多</el-button>
        </div>
    </div>
</template>

<script setup lang='ts'>
import type { Song } from "@/api/types/index";
import { ref, computed } from 'vue'
import { convertToHMS } from '@/utils/index'
import { usePlaySong } from "@/store/modules/playSong";

const props = defineProps<{
    songsList: Song[],
}>()

const pageSize = ref(10)
const page = ref(1)


const { playMusic } = usePlaySong()

const noMore = computed(() => {
    return page.value - (props.songsList.length / pageSize.value) >= 0
})

const loadMore = () => {
    page.value = page.value + 1;
}

</script>
<style scoped lang="scss">
.song_list_box {
    .fs14 {
        font-size: 14px;
        cursor: pointer;
        color: silver;
    }

    .song_list {
        .song_info {
            font-size: 14px;
            cursor: pointer;

            .lh50 {
                line-height: 50px;
            }

            .music_song {
                .df {
                    display: flex;
                    justify-content: space-between;
                    margin-right: 20px;
                }

                .icon {
                    display: none;
                }

                .icon:hover {
                    color: $base-background;
                }

                .music_mv {
                    display: flex;
                    align-items: center;
                    margin-left: 5px;

                    .mv_hover:hover {
                        color: $base-background;
                    }
                }
            }

            .collection {}

            .duration {}
        }

        .song_info:hover {
            --tw-bg-opacity: 1;
            background-color: rgb(229 231 235 / var(--tw-bg-opacity));
        }

        .song_info:hover .icon {
            display: inline;
            color: silver;
        }
    }

}

.mt20 {
    margin-top: 20px;
    margin-bottom: 10px;
}

.loading_btn {
    margin-top: 10px;
    text-align: center;
}

</style>