<template>
    <div class="exclusive_playlist">
        <Title :title="'专属歌单'"/>
        <div class="block">
            <div class="block_list" v-for="(item, index) in exclusivePlaylistData" :key="index">
                <div class="block_item">
                    <PlaylistModule :imgSrc="item.picUrl"></PlaylistModule>
                </div>
                <div class="text">{{ item.name }}</div>
            </div>
        </div>
    </div>
</template>

<script setup lang='ts'>
import Title from '@/components/common/Title/index.vue'
import PlaylistModule from '@/components/common/PlaylistModule/index.vue'
import { onMounted, toRefs } from 'vue'
import { useMusicStore } from '@/store/modules/music'

const { exclusivePlaylistData } = toRefs(useMusicStore())
const { getExclusivePlaylistData } = useMusicStore()


onMounted(async () => {
    await getExclusivePlaylistData();
})


</script>
<style lang="scss" scoped>
.exclusive_playlist {
    h2 {
        font-size: 24px;
        margin: 20px 0;
    }

    .block {
        width: 100%;
        display: flex;
        flex-wrap: wrap;

        .block_list {
            width: 19%;
            // height: calc((100vw - $base-menu-width - 40px)/5);
            margin-right: 1.25%;

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

        .block_list:nth-child(5n) {
            margin-right: 0 !important;
        }

    }
}
</style>