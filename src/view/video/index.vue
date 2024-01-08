<template>
    <el-button plain round>
        <span>全部视频</span>
        <el-icon><ArrowRight /></el-icon>
    </el-button>
    <MvVideo></MvVideo>
</template>

<script setup lang='ts'>
import {
    CaretRight
} from '@element-plus/icons-vue'
import MvVideo from './components/ MvVideo.vue'
</script>
<style scoped></style>