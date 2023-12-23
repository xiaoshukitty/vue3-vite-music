
import { transform } from 'lodash';
<template>
    <div class="playlist" @click="playSkipBtn">
        <el-image class="el_image" :src="imgSrc" :fit="fit" />
        <div class="mask"></div>
        <el-icon class="icon" :size="40" color="#fff" @click.stop="playBackBtn">
            <CaretRight />
        </el-icon>
    </div>
</template>

<script setup lang='ts'>

const props = defineProps({
    imgSrc: {
        type: String,
        default: ''
    }
})

const fits = ['fill', 'contain', 'cover', 'none', 'scale-down']
const url =
    'https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg'

const playBackBtn = () => {
    console.log('点击了播放');
}
const playSkipBtn = () => {
    console.log('点击了跳转');
}
</script>
<style scoped lang="scss">
.playlist {
    position: relative;
    cursor: pointer;
    overflow: hidden;
    transition: transform .5s ease;
    border-radius: 10px;

    .el_image {
        border-radius: 10px;
    }

    .mask {
        position: absolute;
        top: 0px;
        right: 0px;
        bottom: 2px;
        left: 0px;
    }

    .icon {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        display: none;
    }

    .icon:hover {
        color: #34d399 !important;

    }
}

.playlist:hover {
    transform: translateY(-3px);
}

.playlist:hover .icon {
    display: inline;
}

.playlist:hover .mask {
    background-color: rgba(0, 0, 0, .3);
    transition: all .5s;
}
</style>