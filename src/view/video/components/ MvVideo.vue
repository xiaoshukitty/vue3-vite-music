<template>
    <div class="mv_video">
        <div class="mv_block" v-for="{ data } in mvVideoData" :key="data.vid">
            <PlaylistModule :imgSrc="data.coverUrl"></PlaylistModule>
            <div class="title">{{ data.title }}</div>
        </div>
    </div>
</template>

<script setup lang='ts'>
import PlaylistModule from '@/components/common/PlaylistModule/index.vue'
import { onMounted, ref, reactive, toRefs } from 'vue'
import { useMvVideoStore } from '@/store/modules/mvVideo'
const { mvVideoData } = toRefs(useMvVideoStore())
const { getMvVideoData } = useMvVideoStore()


onMounted(async () => {
    await getMvVideoData()
})

</script>
<style scoped lang="scss">
.mv_video {
    margin-top: 20px;
    display: flex;
    flex-wrap: wrap;

    .mv_block {
        width: 32%;
        margin-bottom: 20px;


        .title {
            font-size: 14px;
            margin: 8px 0;
        }
    }

    .mv_block:nth-child(3n-1) {
        margin: 0 20px;
    }
}
</style>