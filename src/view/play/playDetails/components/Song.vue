<template>
    <div class="son_btn fs14">
        <el-button plain round :icon="CaretRight" @click="playAll">播放全部</el-button>
        <el-button plain round :icon="Download">下载</el-button>
        <el-button plain round :icon="Histogram">批量操作</el-button>
    </div>
    <el-row class="fs14 mt20">
        <el-col :span="14">歌曲</el-col>
        <el-col :span="8">专辑</el-col>
        <el-col :span="2">时长</el-col>
    </el-row>
    <div class="song_list">
        <el-row class="h50 song_info" v-for="(item, index) in songList" :key="index" @dblclick="playMusic(item.id)"
            :class="{ 'playing': id === item.id }" onselectstart="return false;">
            <el-col class="music_song lh50" :span="14">
                <div class="df">
                    <div class="music_mv">
                        <div>{{ item.name }}</div>
                        <div style="display: flex; margin-left:5px;" v-if="item.mv > 0">
                            <el-icon class="mv_hover" :size="20" color="#000" @click.stop="playMv('mvDetail', item.mv)">
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
    <div class="loading_btn" v-if="songList.length > 0 && !pageData.noMore">
        <el-button type="success" :loading="pageData.loading" link @click="loadMore">加载更多</el-button>
    </div>
</template>

<script setup lang='ts'>
import {
    CaretRight,
    Download,
    Histogram,
    VideoCamera
} from '@element-plus/icons-vue'
import { convertToHMS } from '@/utils/index'
import { usePlaySong } from "@/store/modules/playSong";
import { Song } from "@/api/types/index";
import { useArtistSongs } from '@/api/index'
import { computed, onMounted, reactive, ref } from 'vue';
import { storeToRefs } from "pinia";
import { useRouter } from "vue-router";

const router = useRouter()
const props = defineProps<{ id: number }>()


const { id, lyricData } = storeToRefs(usePlaySong())
const { playMusic, pushPlayList } = usePlaySong()



const songList = ref<Song[]>([]);
const pageData = reactive({
    order: 'hot',
    limit: 20,
    page: 1,
    loading: false,
    noMore: false,
})

//调用获取列表数据
onMounted(async () => {
    await getData()
})

//多少条数据
const offset = computed(() => {
    if (pageData.page === 1) return 0;
    return songList.value.length + pageData.limit
})

//获取列表数据
const getData = async () => {
    try {
        pageData.loading = true
        const { songs } = await useArtistSongs(props.id, pageData.order, pageData.limit, offset.value);
        console.log('songs----', songs);
        if (pageData.page === 1) {
            songList.value = songs
        } else {
            songList.value.push(...songs)
        }
        if (songs.length < pageData.limit) pageData.noMore = true
    } catch (err) {
        pageData.page--
    }
    pageData.loading = false
}

//加载一下页数据
const loadMore = () => {
    pageData.page++;
    getData();

console.log('---',lyricData);
}

//播放全部
const playAll = () => {
    pushPlayList(false, ...songList.value)
    playMusic(songList.value[0].id)
}

//跳转到 mv 页面
const playMv = (name: string, id: number) => {
    router.push({ path: name, query: { id: id } })
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