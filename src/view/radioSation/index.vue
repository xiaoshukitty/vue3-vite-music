<template>
    <div class="radioSation">
        <h1>电台</h1>
        <PlaylistModule></PlaylistModule>
        <SvgIcon name="Playback" :iconWidth="30" :iconHeight="30" :iconBackgroundColor="'pink'"></SvgIcon>
    </div>
</template>

<script setup lang='ts'>
import PlaylistModule from '@/components/common/PlaylistModule/index.vue'
</script>
<style lang="scss" scoped>
.radioSation {
    h1 {
        font-weight: 700;
        font-size: 40px;
    }
}
</style>