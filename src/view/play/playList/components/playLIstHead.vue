<template>
    <div class="song_info_head">
        <img :src="playlist?.coverImgUrl" alt="">
        <div class="details_right">
            <div>
                <div class="details_name">{{ playlist?.name }}</div>
                <div class="play_info_head">
                    <img :src="playlist?.creator.avatarUrl" alt="">
                    <div>{{ playlist?.creator.nickname }}</div>
                    <div class="ml_20 color" v-for="tag in playlist.tags" :key="tag">
                        #{{ tag }}
                    </div>
                </div>
                <MoreText :text="playlist.description" :end="90"></MoreText>
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
import type { PlayListDetail } from '@/api/types/playlist'
import MoreText from '@/components/common/MoreText/index.vue'

defineProps<{
    playlist: PlayListDetail,
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
        justify-content: space-between;
        margin-left: 20px;

        .details_name {
            font-weight: 700;
            font-size: 30px;
        }

        .play_info_head {
            display: flex;
            align-items: center;
            margin: 20px 0 10px;

            img {
                width: 24px;
                height: 24px;
                margin-right: 5px;
            }

            .ml_20 {
                margin-left: 20px;
                cursor: pointer;
            }

            .color:hover {
                color: $base-fontSize-color;
            }

            div {
                font-size: 12px;
                --tw-text-opacity: 1;
                color: rgb(148 163 184 / var(--tw-text-opacity));
            }
        }
    }

    .fs12 {
        font-size: 12px;
        color: silver;
    }
}
</style>