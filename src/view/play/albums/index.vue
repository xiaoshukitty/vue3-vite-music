<template>
    <div v-if="albumData">
        <SongInfoHead :albumData="albumData"></SongInfoHead>
    </div>
    <el-tabs v-model="activeName" class="demo-tabs" v-if="albumData">
        <el-tab-pane :label="`歌曲 ${num}`" name="song">
            <SongList :songsList="songsList" :id="id"></SongList>
        </el-tab-pane>
        <el-tab-pane label="评论" name="review">review</el-tab-pane>
        <el-tab-pane label="专辑详情" name="albumDetails">albumDetails</el-tab-pane>
    </el-tabs>
</template>

<script setup lang='ts'>
import SongInfoHead from '@/components/common/SongInfoHead/index.vue'
import SongList from '@/components/common/SongList/index.vue'
import { ref, onMounted } from 'vue'
import { useRoute } from 'vue-router'
import { useAlbum } from '@/api/index'
import type { Album } from '@/api/types/album'
import { Song } from "@/api/types/index";

const albumData = ref<Album>()
const songsList = ref<Song[]>([])
const route = useRoute()
const id = Number(route.query.id)
const activeName = ref<string>('song')
const num = ref<number>()

onMounted(async () => {
    const { album, songs } = await useAlbum(id)
    albumData.value = album;
    songsList.value = songs;
    num.value = songs.length;

})
</script>
<style scoped lang="scss">
::v-deep .el-tabs__nav-wrap::after {
    height: 0;
}
</style>