<template>
    <div class="mv_detail">
        <video class="mv_video" :src="mvUrl?.url" autoplay controls />
    </div>
</template>

<script setup lang='ts'>
import { onMounted, onUnmounted, ref } from "vue";
import { MvUrl } from '@/api/types/mv'
import { useRoute } from "vue-router";
import { useMvUrl } from '@/api/mv/index'
import { usePlaySong } from '@/store/modules/playSong'

const { mvPlayPauseMusic, mvPausePlayMUsic } = usePlaySong()
const route = useRoute();
const id = Number(route.query.id);//获取路由传递的 id
const mvUrl = ref<MvUrl>()

onMounted(async () => {
    mvUrl.value = await useMvUrl(id);
    mvPlayPauseMusic();
})

//卸载时触发
onUnmounted(() => {
    setTimeout(() => {
        mvPausePlayMUsic()
    }, 1000)
})
</script>
<style scoped lang="scss">
.mv_detail {
    width: 80%;

    .mv_video {
        width: 100%;
    }
}
</style>