<template>
    <div style="padding: 20px;" v-if="isFlag">
        <div v-if="playlist">
            <playListHead :playlist="playlist"></playListHead>
        </div>
        <el-tabs v-model="activeName" class="demo-tabs" v-if="playlist">
            <el-tab-pane :label="`歌曲 ${songs.length}`" name="song">
                <SongList :songsList="songs" v-loading="isShow" />
            </el-tab-pane>
            <el-tab-pane lazy :label="`评论 ${reviewObj.total}`" name="comments">
                <ReviewList :reviewObj="reviewObj" :pageInfo="pageInfo" @update:pageSize="updatePageSize"
                    @update:currentPage="updateCurrentPage" v-loading="isReview"></ReviewList>
            </el-tab-pane>
        </el-tabs>
    </div>
</template>

<script setup lang='ts'>
import playListHead from './components/playLIstHead.vue'
import ReviewList from './components/ReviewList.vue'
import SongList from './components/SongList.vue'
import { useRoute } from 'vue-router'
import { usePlayListDetail, usePlayListTrackAll, usePlayReiewListAll } from '@/api/index'
import { onMounted, ref, reactive, watch } from 'vue';
import type { PlayListDetail } from '@/api/types/playlist'
import type { Song } from "@/api/types/index";


const activeName = ref<string>('song')
const playlist = ref<PlayListDetail>()
const songs = ref<Song[]>([]);
const route = useRoute();
const isShow = ref<boolean>(false);
const isReview = ref<boolean>(false);
const reviewObj = ref<any>({});
const isFlag = ref<boolean>(false);
let id = Number(route.query.id);
const pageInfo = reactive({
    currentPage: 1,
    page: 1,
    pageSize: 20,
    total: 0
})

const getPlatListData = async (id: number) => {
    await usePlayListDetail(id).then(res => {
        playlist.value = res;
    })

    await usePlayListTrackAll(id).then(res => {
        songs.value = res;
        isShow.value = false;
        isFlag.value = true;
    })
}

//获取评论列表
const getReiewListAll = (id: number) => {
    isReview.value = true;
    let params = {
        id: id,
        limit: pageInfo.pageSize,
        offset: ((pageInfo.page) - 1) * pageInfo.pageSize,
        before: ''
    }
    usePlayReiewListAll(params).then(res => {
        reviewObj.value = res;
        pageInfo.total = reviewObj.value.total;
        isReview.value = false;
        isFlag.value = true;
    })
}

//更新每页多少条
const updatePageSize = (val: number) => {
    console.log(val);
    pageInfo.pageSize = val;
    pageInfo.page = 1;
    pageInfo.currentPage = 1;
    getReiewListAll(id);
}

//多少页
const updateCurrentPage = (val: number) => {
    console.log(val);
    pageInfo.page = val;
    getReiewListAll(id);
}


watch(
    () => route.query.id,
    (newPath, oldPath) => {
        if (newPath !== oldPath) {
            getReiewListAll(Number(newPath));
            getPlatListData(Number(newPath));
            activeName.value = 'song'
            id = Number(newPath)
            isFlag.value = false;
        }
    }
)

onMounted(() => {
    isShow.value = true;
    getPlatListData(id);
    getReiewListAll(id);
    isReview.value = true;
})
</script>
<style scoped lang="scss">
::v-deep .el-tabs__nav-wrap::after {
    height: 0;
}

// ::v-deep .el-tabs__header{
//     position: sticky;
//     top: 0;
//     background: #fff;
//     z-index: 9;
// }</style>