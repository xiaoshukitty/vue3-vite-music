<template>
    <div class="radioSation" v-loading="loading">
        <div class="song-top">
            <div class="song-img">
                <img :src="zeroObj.coverImgUrl" alt="">
            </div>
            <div class="song-right">
                <div class="song-txt">
                    <span>{{ songType }}</span>
                </div>
                <div class="song-txt1">{{ zeroObj.name }}</div>
                <div class="song-txt2">{{ zeroObj.description }}</div>
            </div>
        </div>
        <div class="song-center">
            <el-scrollbar :class="isBg ? 'tabs_bg1' : 'tabs_bg'">
                <div class="scrollbar-flex-content">
                    <p v-for="(item, index) in tagList" :key="item"
                        :class="['scrollbar-demo-item', avatarIndex == index ? 'active' : '']"
                        @click="binTag(index, item)">
                        {{ item.name }}
                    </p>
                </div>
            </el-scrollbar>
        </div>
        <div class="song-bottom">
            <div class="song-bottom-list">
                <div class="song-bottom-item" v-for="(item, index) in songList.playlists" :key="item.id">
                    <div class="block_item" @click="goToPlayList(item)">
                        <PlaylistModule :imgSrc="item.coverImgUrl"></PlaylistModule>
                    </div>
                    <div class="text">{{ item.name }}</div>
                </div>

            </div>
        </div>

    </div>
</template>

<script setup lang='ts'>
import PlaylistModule from '@/components/common/PlaylistModule/index.vue'
import { getTopPlayList, getTopPlayListTags } from '@/api/radioSation'
import { onMounted, ref, watch } from 'vue'
import { useRouter } from "vue-router";
import { useThemeStore } from '@/store/modules/theme'

let songType = ref<string>('全部');
let songList = ref<any>([]);
const zeroObj = ref<object>({})
const tagList = ref<any>([]);
let avatarIndex = ref<number>(0);
let loading = ref<boolean>(false);
const router = useRouter();//倒入路由模块
const musicThemeStore = useThemeStore();
const isBg = ref<boolean>();

const getPayList = async () => {
    loading.value = true;
    let prams = {
        cat: songType.value,
        limit: 20,
    }
    const res = await getTopPlayList(prams);
    songList.value = res;
    zeroObj.value = songList.value.playlists[0];
    loading.value = false;
}

const getPlayListTags = async () => {
    const res = await getTopPlayListTags();
    tagList.value = res.tags;
}

//点击标签
const binTag = (index: number, item: object) => {
    songType.value = item.name;
    avatarIndex.value = index;
    getPayList();
}

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

watch(
    () => musicThemeStore.getTheme,
    (newVal: any) => {
        newVal == 'dark' ? isBg.value = false : isBg.value = true;
    }
);


onMounted(async () => {
    loading.value = true;
    musicThemeStore.theme == 'dark' ? isBg.value = false : isBg.value = true;
    await getPayList();
    await getPlayListTags();

})
</script>
<style lang="scss" scoped>
.radioSation {
    padding: 20px;

    .song-top {
        padding: 15px;
        display: flex;
        border-radius: 10px;
        background-color: rgb(37 37 37 / 0.3);

        .song-img {
            width: 144px;
            height: 144px;

            margin-right: 20px;

            img {
                width: 144px;
                height: 144px;
                border-radius: 10px;
            }
        }

        .song-right {
            .song-txt {
                width: 100%;
                cursor: pointer;

                span {
                    display: inline-block;
                    font-size: 14px;
                    color: #34d399;
                    border: 1px solid #34d399;
                    padding: 6px 10px;
                    border-radius: 4px;
                }
            }

            .song-txt1 {
                cursor: pointer;
                font-size: 14px;
                color: rgba(255, 255, 255, 0.82);
                padding-top: 0.5rem;
                padding-bottom: 0.5rem;
            }

            .song-txt2 {
                cursor: pointer;
                font-size: 12px;
                color: rgba(255, 255, 255, 0.82);
                font-size: 0.75rem;
                line-height: 1rem;
            }
        }
    }

    .song-center {
        position: sticky;
        top: 0;
        background: #fff;
        z-index: 999;

        .scrollbar-flex-content {
            display: flex;
        }

        .scrollbar-demo-item {
            flex-shrink: 0;
            display: flex;
            align-items: center;
            justify-content: center;
            height: 3ch;
            margin: 10px;
            cursor: pointer;
            text-align: center;
            border-radius: 4px;
        }
    }

    .song-bottom {
        margin-top: 8px;

        .song-bottom-list {
            width: 100%;
            display: grid;
            grid-template-columns: repeat(5, minmax(0px, 1fr));
            gap: 8px 12px;

            .song-bottom-item {
                grid-column: span 1 / span 1;
                cursor: pointer;

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
        }
    }

    .active {
        color: #34d399
    }

    .tabs_bg {
        background-color: $base-dark !important;
    }

    .tabs_bg1 {
        background-color: #fff;
    }

}

::v-deep .el-loading-spinner {
    top: 20% !important;
}
</style>