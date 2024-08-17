<template>
    <div class="radioSation" v-loading="loading">
        <el-space style="width: 100%" fill>
            <el-skeleton class="skelton" animated :loading="skeletonLoading">
                <template #template>
                    <div class="skelton-img">
                        <el-skeleton-item variant="image" class="skelton-img2" />
                        <div class="skelton-img1">
                            <el-skeleton-item variant="h3" style="width: 100%; margin-top: 5px;" />
                            <el-skeleton-item variant="h3" style="width: 100%; margin-top: 5px;" />
                            <el-skeleton-item variant="h3" style="width: 100%; margin-top: 5px;" />
                        </div>
                    </div>
                </template>
                <template #default>
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
                </template>
            </el-skeleton>
            <el-skeleton class="skelton" animated :count="1" :loading="skeletonLoading">
                <template #template>
                    <div class="skelton-box">
                        <div v-for="(item, index) in 40" :key="index">
                            <el-skeleton-item variant="h3" class="skelton-box-item" />
                        </div>
                    </div>
                </template>
                <template #default>
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
                </template>
            </el-skeleton>
            <el-skeleton class="skelton" animated :count="1" :loading="skeletonLoading">
                <template #template>
                    <div class="skelton-img-two">
                        <div class="" v-for="(item, index) in 15" :key="index">
                            <el-skeleton-item variant="image" class="skelton-img2-two" />
                            <el-skeleton-item variant="h3" style="width: 100%; margin-top: 5px;" />
                        </div>
                    </div>
                </template>
                <template #default>
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
                </template>
            </el-skeleton>
        </el-space>
    </div>
</template>

<script setup lang='ts'>
import PlaylistModule from '@/components/common/PlaylistModule/index.vue'
import { getTopPlayList, getTopPlayListTags } from '@/api/radioSation'
import { onMounted, ref, watch, toRefs } from 'vue'
import { useRouter } from "vue-router";
import { useThemeStore } from '@/store/modules/theme';
import useUserStore from '@/store/modules/user';

let songType = ref<string>('全部');
let songList = ref<any>([]);
const zeroObj = ref<object>({})
const tagList = ref<any>([]);
let avatarIndex = ref<number>(0);
let loading = ref<boolean>(false);
const router = useRouter();//倒入路由模块
const musicThemeStore = useThemeStore();
const isBg = ref<boolean>();
const { skeletonLoading } = toRefs(useUserStore());

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

.skelton {
    .skelton-img {
        display: flex;
        padding: 15px;
        width: 100%;

        .skelton-img2 {
            height: 144px;
            width: 144px;
            border-radius: 10px;
            margin-right: 20px;
        }

        .skelton-img1 {
            flex: 1;
        }
    }

    .skelton-box {
        display: flex;
        width: 100%;
        overflow: hidden;

        .skelton-box-item {
            width: 32px;
            height: 29px;
            margin: 10px;
        }
    }

    .skelton-img-two {
        width: 100%;
        display: grid;
        grid-template-columns: repeat(5, minmax(0px, 1fr));
        gap: 8px 12px;

        .skelton-img2-two {
            height: 310px;
            width: 100%;
        }

    }
}

::v-deep .el-loading-spinner {
    top: 20% !important;
}
</style>