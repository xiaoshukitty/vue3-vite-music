<template>
    <svg class="svg-icon"
        :style="'width:' + iconWidth + 'px' + ';' + 'height:' + iconHeight + 'px' + ';' + 'color:' + iconColor + ';' + 'background-color:' + iconBackgroundColor"
        aria-hidden="true">
        <use :xlink:href="iconName"></use>
    </svg>
</template>

<script setup lang="ts">
import { computed } from "vue";

const props = defineProps({
    //应用的图标名称
    name: {
        type: String,
        default: ''
    },
    //iocn 宽度
    iconWidth: {
        type: Number,
        default: ''
    },
    //iocn 高度
    iconHeight: {
        type: Number,
        default: ''
    },
    //iocn 颜色
    iconColor: {
        type: String,
        default: ""
    },
    //iocn 背景色
    iconBackgroundColor: {
        type: String,
        default: ""
    }
})

const iconName = computed(() => {
    return `#icon-${props.name}`
})

</script>

<style lang="scss" scoped>
svg {
    width: 1rem;
    height: 1rem;
    vertical-align: -0.15em;
    fill: currentColor; // 填充为当前颜色
    overflow: hidden;
}
</style>

