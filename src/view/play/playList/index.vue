<template>
    <div v-if="playlist">
        <playListHead :playlist="playlist"></playListHead>
    </div>
    <el-tabs v-model="activeName" class="demo-tabs" v-if="playlist">
        <el-tab-pane :label="`歌曲 ${songs.length}`" name="song">
            <SongList :songsList="songs" v-loading="isShow" />
        </el-tab-pane>
        <el-tab-pane lazy label="评论" name="comments" />
    </el-tabs>
</template>

<script setup lang='ts'>
import playListHead from './components/playLIstHead.vue'
import SongList from './components/SongList.vue'
import { useRoute } from 'vue-router'
import { usePlayListDetail, usePlayListTrackAll } from '@/api/index'
import { onMounted, ref } from 'vue';
import type { PlayListDetail } from '@/api/types/playlist'
import type { Song } from "@/api/types/index";

const activeName = ref<string>('song')
const playlist = ref<PlayListDetail>()
const songs = ref<Song[]>([]);
const route = useRoute();
const isShow = ref<boolean>(false)


const getPlatListData = async () => {
    const id: number = Number(route.query.id);
    await usePlayListDetail(id).then(res => {
        playlist.value = res;
        console.log('playlist----', playlist);
    })

    await usePlayListTrackAll(id).then(res => {
        songs.value = res;
        isShow.value = false;
        console.log('songs----', songs);
    })
}

onMounted(() => {
    isShow.value = true;
    getPlatListData();
})
</script>
<style scoped lang="scss">
::v-deep .el-tabs__nav-wrap::after {
    height: 0;
}
</style>