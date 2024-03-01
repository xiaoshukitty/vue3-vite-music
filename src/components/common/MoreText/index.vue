<template>
    <div class="more_text">
        <template v-if="isShow">
            <span v-if="!isPutAwayDisplay">{{ text.substring(0, end) }}...</span>
            <span v-else>{{ text }}...</span>
            <span class="ml_20" @click="isPutAwayDisplay = !isPutAwayDisplay">[{{ isPutAwayDisplay ? '收起' : '详情' }}]</span>
        </template>
        <template v-else>
            {{ text }}
        </template>
    </div>
</template>

<script setup lang='ts'>
import { ref } from 'vue';

const props = defineProps<{ text: string, end: number }>()
const isShow = ref<boolean>(false); // 是否展示展开收起
const isPutAwayDisplay = ref<boolean>(false); // true是收起，反之亦然

if (props.text && props.text.length > props.end) {
    isShow.value = true
}
</script>
<style scoped lang="scss">
.more_text {
    font-size: 14px;
    --tw-text-opacity: 1;
    color: rgb(148 163 184 / var(--tw-text-opacity));

    .ml_20 {
        margin-left: 20px;
        cursor: pointer;
    }

    .ml_20:hover {
        color: $base-fontSize-color;
    }
}
</style>