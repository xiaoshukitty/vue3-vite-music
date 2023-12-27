<template>
    <div class="details_top" v-if="isFlag">
        <SongInfoHead :detailsData="detailsData"></SongInfoHead>
    </div>
    <el-tabs v-model="activeName" class="demo-tabs" v-if="isFlag">
        <el-tab-pane :label="`歌曲 ${detailsData?.artist.musicSize}`" name="song">
            <Song :id="id"></Song>
        </el-tab-pane>
        <el-tab-pane :label="`专辑 ${detailsData?.artist.albumSize}`" name="collection">Config</el-tab-pane>
        <el-tab-pane :label="`视频 ${detailsData?.artist.musicSize}`" name="M">Role</el-tab-pane>
        <el-tab-pane label="详情" name="songDetails">Task</el-tab-pane>
    </el-tabs>
</template>

<script setup lang='ts'>
import SongInfoHead from '@/components/common/SongInfoHead/index.vue'
import { onMounted, ref } from 'vue'
import Song from './components/Song.vue'
import { useArtistDetail } from '@/api/index'
import { useRoute } from "vue-router";
import type { ArtistDetail } from '@/api/types/details'

const route = useRoute()
const id = Number(route.query.id);
const detailsData = ref<ArtistDetail>()
const isFlag = ref<boolean>(false)
const activeName = ref('song')

onMounted(async () => {
    detailsData.value = await useArtistDetail(id);
    isFlag.value = true;
})

</script>
<style scoped lang="scss">
::v-deep .el-tabs__nav-wrap::after {
    height: 0;
}
</style>