<template>
    <Title :title="'官方榜'" />
    <div class="official">
        <div class="official_list" v-for="item in officialListData.slice(0, 4)" :key="item.id">
            <div class="official_name">
                <PlaylistModule :imgSrc="item.coverImgUrl"></PlaylistModule>
            </div>
            <div class="official_name_list">
                <div>{{ item.name }}</div>
                <div class="official_name_box" v-for="(track, index) in item.tracks" :key="index">
                    <div>{{ index + 1 }} </div>
                    <div class="track_name">{{ track.first }} - {{ track.second }}</div>
                </div>
            </div>
        </div>
    </div>
    <Title :title="'特色榜'" />
    <div class="featured_Leaderboard">
        <div class="list" v-for="item in officialListData.slice(4)" :key="item.id">
            <div class="img">
                <PlaylistModule :imgSrc="item.coverImgUrl"></PlaylistModule>
            </div>
            <div class="text">{{ item.name  }}</div>
        </div>
    </div>
</template>

<script setup lang='ts'>

import PlaylistModule from '@/components/common/PlaylistModule/index.vue'

import { toRefs, onMounted } from 'vue'
import { useMusicStore } from '@/store/modules/music'

const { getOfficialListData } = useMusicStore();
const { officialListData } = toRefs(useMusicStore());

console.log('officialListData--', officialListData);

onMounted(async () => {
    await getOfficialListData()
})
</script>
<style scoped lang="scss">
.official {
    display: flex;

    .official_list {
        width: 25%;
        margin-right: 10px;
        border-radius: 10px;
        display: flex;
        height: 130px;
        --tw-bg-opacity: 1;
        background-color: rgb(243 244 246 / var(--tw-bg-opacity));

        .official_name {
            width: 130px;
            height: 130px;
            border-radius: 10px;

            img {
                width: 100%;
                border-radius: 10px;
            }
        }

        .official_name_list {
            padding: 20px;
            font-size: 12px;

            &>div:nth-child(1) {
                font-size: 20px;
            }

            &>div:nth-child(2) {
                margin-top: 10px;
            }

            &>div:nth-child(3) {
                margin: 10px 0;
            }

            .official_name_box {
                width: 130px;
                display: flex;

                .track_name {
                    margin-left: 5px;
                    overflow: hidden;
                    text-overflow: ellipsis;
                    white-space: nowrap;
                }
            }

        }
    }

    .official_list:nth-child(4) {
        margin-right: 0 !important;
    }
}

.featured_Leaderboard {
    display: flex;
    flex-wrap: wrap;

    .list {
        width: 9%;
        margin-right: 1%;

        .img {
            img {
                border-radius: 10px;
                width: 100%;
            }
        }

        .text {
            font-size: .75rem;
            line-height: 1rem;
            margin-bottom: 0.5rem;
        }
    }

    .list:nth-child(10) {
        margin-right: 0 !important;
    }
}
</style>