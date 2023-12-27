<template>
    <div class="song_info_head">
        <img :class="componentsType == 'albums' ? 'img1' : 'img2'"
            :src="componentsType == 'albums' ? detailsData.picUrl : detailsData?.artist.cover" alt="">
        <div class="details_right">
            <div class="details_name">{{ componentsType == 'albums' ? detailsData.name : detailsData?.artist.name }}</div>
            <div class="details_info fs12">{{ componentsType == 'albums' ? detailsData.artist.name :
                (detailsData?.artist.briefDesc.substring(0, 90) + '...') }}</div>
            <div class="details_song fs12">
                <div v-if="componentsType == 'albums'">
                    <span>{{ useTimestamp(detailsData.publishTime) }}</span>
                </div>
                <div v-else>
                    <span>单曲数：{{ detailsData?.artist.musicSize }}</span>
                    <span style="margin: 0 15px;">专辑数：{{ detailsData?.artist.albumSize }}</span>
                    <span>MV数：{{ detailsData?.artist.mvSize }}</span>
                </div>
            </div>
            <div class="details_btn">
                <div v-if="componentsType == 'albums'">
                    <el-button type="success" :icon="CaretRight" round>播放全部</el-button>
                    <el-button :icon="Star" round>收藏</el-button>
                    <el-button :icon="MoreFilled" circle />
                </div>
                <div v-else>
                    <el-button type="success" :icon="Plus" round>关注</el-button>
                    <el-button :icon="CirclePlus" round>歌手电台</el-button>
                    <el-button :icon="MoreFilled" circle />
                </div>
            </div>
        </div>

    </div>
</template>

<script setup lang='ts'>

import {
    CirclePlus,
    Plus,
    MoreFilled,
    CaretRight,
    Star
} from '@element-plus/icons-vue'

import type { Album } from '@/api/types/album'
import type { ArtistDetail } from '@/api/types/details'
import { useTimestamp } from '@/utils/index'

defineProps<{
    detailsData: ArtistDetail,
    componentsType: Album
}>()

</script>
<style scoped lang="scss">
.song_info_head {
    height: 176px;
    display: flex;

    img {
        width: 176px;
        height: 100%;

    }

    .img1 {
        border-radius: 10px;
    }

    .img2 {
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
</style>