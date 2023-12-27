<template>
    <el-row class="fs14 mt20">
        <el-col :span="14">歌曲</el-col>
        <el-col :span="8">专辑</el-col>
        <el-col :span="2">时长</el-col>
    </el-row>
    <div class="song_list">
        <el-row class="h50 song_info" v-for="(item, index) in songsList" :key="index" @dblclick="playMusic(item.id)"
            :class="{ 'playing': id === item.id }">
            <el-col class="music_song lh50" :span="14">
                <div class="df">
                    <div class="music_mv">
                        <div>{{ item.name }}</div>
                        <div style="display: flex; margin-left:5px;">
                            <el-icon class="mv_hover" :size="20" color="#000" @click.stop="playMv(item.id)">
                                <VideoCamera />
                            </el-icon>
                        </div>
                    </div>
                    <div style="display: flex; align-items: center;">
                        <el-icon class="icon" :size="20" color="#fff" @click.stop="playMusic(item.id)">
                            <CaretRight />
                        </el-icon>
                    </div>
                </div>
            </el-col>
            <el-col class="collection lh50" :span="8">{{ item.al.name }}</el-col>
            <el-col class="duration lh50" :span="2">{{ convertToHMS(item.dt / 1000) }}</el-col>
        </el-row>
    </div>
</template>

<script setup lang='ts'>
import {
    CaretRight,
    VideoCamera
} from '@element-plus/icons-vue'
import { Song } from "@/api/types/index";
import { convertToHMS } from '@/utils/index'
import { usePlaySong } from "@/store/modules/playSong";

defineProps<{ songsList: Song, id: number }>()

const { playMusic } = usePlaySong()
//跳转到 mv 页面
const playMv = (id: number) => {
    console.log('id---', id);
}
</script>
<style scoped lang="scss">
.song_list {
    .song_info {
        font-size: 14px;
        cursor: pointer;

        .lh50 {
            line-height: 50px;
        }

        .music_song {
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

.loading_btn {
    margin-top: 10px;
    text-align: center;
}

.fs14 {
    font-size: 14px;
    color: silver;
}

.mt20 {
    margin-top: 20px;
    margin-bottom: 10px;
}

.h50 {
    height: 50px;
}

.playing {
    --tw-bg-opacity: 1;
    background-color: rgb(236 253 245 / var(--tw-bg-opacity));
}

.df {
    display: flex;
    justify-content: space-between;
    padding-right: 20px;
}</style>