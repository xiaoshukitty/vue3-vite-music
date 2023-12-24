<template>
    <div class="radioSation">
        <h1>电台</h1>
        <div @click="goToBack('playDetails', 11564)">去详情页面</div>
        <SvgIcon name="Playback" :iconWidth="30" :iconHeight="30" :iconBackgroundColor="'pink'"></SvgIcon>
    </div>
</template>

<script setup lang='ts'>
import { useRouter } from "vue-router";

const router = useRouter()
const goToBack = (name: string, id: number) => {
    router.push({ path: name, query: { id: id } })
}
</script>
<style lang="scss" scoped>
.radioSation {
    h1 {
        font-weight: 700;
        font-size: 40px;
    }
}
</style>