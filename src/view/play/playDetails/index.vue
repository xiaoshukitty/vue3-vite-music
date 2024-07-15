<template>
    <div class="details_top" v-if="isFlag">
        <img :src="detailsData?.artist.cover" alt="">
        <div class="details_right">
            <div class="details_name">{{ detailsData?.artist.name }}</div>
            <div class="details_info fs12">{{ detailsData?.artist.briefDesc.substring(0, 90) }}...</div>
            <div class="details_song fs12">
                <span>单曲数：{{ detailsData?.artist.musicSize }}</span>
                <span style="margin: 0 15px;">专辑数：{{ detailsData?.artist.albumSize }}</span>
                <span>MV数：{{ detailsData?.artist.mvSize }}</span>
            </div>
            <div class="details_btn">
                <el-button type="success" :icon="Plus" round>关注</el-button>
                <el-button :icon="CirclePlus" round>歌手电台</el-button>
                <el-button :icon="MoreFilled" circle />
            </div>
        </div>
    </div>
    <el-tabs v-model="activeName" class="demo-tabs" v-if="isFlag">
        <el-tab-pane :label="`歌曲 ${detailsData?.artist.musicSize}`" name="song">
            <Song :id="id" :typeSelect="typeSelect"></Song>
        </el-tab-pane>
        <el-tab-pane :label="`专辑 ${detailsData?.artist.albumSize}`" name="collection">
            <Album :id="id"></Album>
        </el-tab-pane>
        <el-tab-pane :label="`视频 ${detailsData?.artist.musicSize}`" name="M">
            <PersonageMV :id="id"></PersonageMV>
        </el-tab-pane>
        <el-tab-pane label="详情" name="songDetails">
            <Introduce :id="id"></Introduce>
        </el-tab-pane>
    </el-tabs>
</template>

<script setup lang='ts'>
import { onMounted, ref, watch } from 'vue'
import Song from './components/Song.vue'
import Album from './components/Album.vue'
import Introduce from './components/Introduce.vue'
import PersonageMV from './components/PersonageMV.vue'
import { useArtistDetail } from '@/api/index'
import { useRoute } from "vue-router";
import type { ArtistDetail } from '@/api/types/details'
import {
    CirclePlus,
    Plus,
    MoreFilled
} from '@element-plus/icons-vue'

const route = useRoute()
let id = Number(route.query.id);
const detailsData = ref<ArtistDetail>()
const isFlag = ref<boolean>(false)
const activeName = ref('song')

onMounted(async () => {
    getUseArtistDetail(id)
})

const getUseArtistDetail = async (id: number) => {
    detailsData.value = await useArtistDetail(id);
    isFlag.value = true;
}

watch(
    () => route.query.id,
    (newPath, oldPath) => {
        if (newPath !== oldPath) {
            getUseArtistDetail(Number(newPath));
            id = Number(newPath)
            isFlag.value = false;
        }
    }
)

</script>
<style scoped lang="scss">
.details_top {
    height: 176px;
    display: flex;

    img {
        width: 176px;
        height: 100%;
        border-radius: 50%;
    }

    .details_right {
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        margin-left: 20px;

        .details_name {
            font-weight: 700;
            font-size: 30px;
        }
    }

    .fs12 {
        font-size: 12px;
        color: silver;
    }
}

::v-deep .el-tabs__nav-wrap::after {
    height: 0;
}
</style>