<template>
    <div class="play">
        <div class="slider-demo-block">
            <el-slider v-model="playBlack" :show-tooltip="false" />
        </div>
        <div class="song_info">
            <div class="song_left">1</div>
            <div class="song_conter">2</div>
            <div class="song_right">3</div>
        </div>
    </div>
</template>

<script setup lang='ts'>
import { ref } from 'vue'

const playBlack = ref(0)
</script>
<style scoped lang="scss">
.play {
    width: 100%;
    height: 70px;
    background-color: #fff;

    .song_info {
        display: flex;
        padding: 0 20px;
        .song_left,
        .song_conter,
        .song_right {
            flex: 1;
        }
    }

    ::v-deep .el-slider {
        height: 10px !important;

    }

    ::v-deep .el-slider__button {
        width: 9px;
        height: 8px;
    }

    ::v-deep .el-slider__runway,
    ::v-deep .el-slider__bar {
        height: 2px !important;
        border-radius: 0 !important;
    }

    ::v-deep .el-slider__button-wrapper {
        opacity: 0;
        transition-property: opacity;
        transition-timing-function: cubic-bezier(.4, 0, .2, 1);
        transition-duration: .15s;
        width: 10px;
        height: 10px;
        top: -10.5px;
    }
}</style>