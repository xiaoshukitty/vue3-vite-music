<template>
    <div class="song_info_head">
        <img :src="albumData?.picUrl" alt="">
        <div class="details_right">
            <div class="details_name">{{ albumData?.name }}</div>
            <div class="details_info fs12">{{ albumData.artist.name }}</div>
            <div class="details_song fs12">
                <span>{{ useTimestamp(albumData?.publishTime) }}</span>
            </div>
            <div class="details_btn">
                <el-button type="success" :icon="CaretRight" round>播放全部</el-button>
                <el-button :icon="Star" round>收藏</el-button>
                <el-button :icon="MoreFilled" circle />
            </div>
        </div>

    </div>
</template>

<script setup lang='ts'>

import {
    MoreFilled,
    CaretRight,
    Star
} from '@element-plus/icons-vue'
import type { Album } from '@/api/types/album'
import { useTimestamp } from '@/utils/index'

defineProps<{
    albumData: Album,
}>()

</script>
<style scoped lang="scss">
.song_info_head {
    height: 176px;
    display: flex;

    img {
        width: 176px;
        height: 100%;
        border-radius: 10px;
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