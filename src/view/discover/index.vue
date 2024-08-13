<template>
    <div class="discover">
        <h1>推荐</h1>
        <Banner></Banner>
        <ExclusivePlaylist />
        <RecommendedMusic />
        <Mv />
    </div>
</template>

<script setup lang='ts'>
import Banner from './components/Banner/index.vue'
import ExclusivePlaylist from './components/ExclusivePlaylist/index.vue'
import RecommendedMusic from './components/RecommendedMusic/index.vue'
import Mv from './components/Mv/index.vue'
</script>
<style lang="scss" scoped>
.discover {
    padding: 20px;

    h1 {
        font-weight: 700;
        font-size: 40px;
    }
}
</style>