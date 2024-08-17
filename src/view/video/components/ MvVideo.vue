<template>
    <el-space style="width: 100%" fill>
        <el-skeleton class="skelton" animated :count="1" :loading="skeletonLoading">
            <template #template>
                <div v-for="(item, index) in 9" :key="index">
                    <el-skeleton-item variant="image" style="height: 300px; border-radius: 10px;" />
                    <el-skeleton-item variant="h3" style="width: 100%; margin-top: 5px;" />
                </div>
            </template>
            <template #default>
                <div class="mv_video">
                    <div class="mv_block" v-for="{ data } in mvVideoData" :key="data.vid">
                        <PlaylistModule :imgSrc="data.coverUrl" style="height: 280px;"></PlaylistModule>
                        <div class="title">{{ data.title }}</div>
                    </div>
                </div>
            </template>
        </el-skeleton>
    </el-space>
</template>

<script setup lang='ts'>

defineProps({
    mvVideoData: {
        type: Object,
        default: ''
    },
    skeletonLoading:{
        type: Boolean,
        default: false
    }
})

import PlaylistModule from '@/components/common/PlaylistModule/index.vue'

</script>
<style scoped lang="scss">
.mv_video {
    margin-top: 20px;
    display: grid;
    gap: 8px 12px;
    width: 100%;
    grid-template-columns: repeat(3, minmax(0px, 1fr));
    border-radius: 10px;

    .mv_block {

        .title {
            font-size: 14px;
            margin: 8px 0;
        }
    }

    .mv_block:nth-child(3n-1) {
        margin: 0 20px;
    }

}

.skelton {
    display: grid;
    gap: 8px 12px;
    width: 100%;
    grid-template-columns: repeat(3, minmax(0px, 1fr));

}
</style>