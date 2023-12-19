<template>
    <div>
        <el-switch v-model="dark" class="mt-2" style="margin-left: 24px" inline-prompt :active-icon="Sunny"
            :inactive-icon="Moon" @change="changeDark" />
    </div>
</template>

<script setup lang='ts'>
import { Moon, Sunny } from '@element-plus/icons-vue'
import { ref } from 'vue'
//获取 setting 仓库
import useLayOutSettingStore from '@/store/modules/setting'
//引入操作本地存储工具方法
import { SET_STORAGE, GET_STORAGE } from '@/utils/storage'

let layOutSettingStore = useLayOutSettingStore();
//收集开关
let dark = ref<boolean>(false)

//获取 html 根节点
let html = document.documentElement;
if (GET_STORAGE('THEME') == 'dark') {
    html.className = 'dark';
    dark.value = true;
} else {
    html.className = '';
    dark.value = false;
}

const changeDark = () => {
    //判断标签是否有 dark
    if (dark.value) {
        html.className = 'dark';
        layOutSettingStore.theme = 'dark'
        SET_STORAGE('THEME', 'dark');
    } else {
        html.className = '';
        layOutSettingStore.theme = 'light';
        SET_STORAGE('THEME', 'light');
    }
}
</script>
<style scoped></style>