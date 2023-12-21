<template>
    <div class="tabbar_left">
        <el-input v-model="search_ipt" placeholder="搜索音乐、MV、歌单" clearable :prefix-icon="Search" input-style="#000">
        </el-input>
    </div>
    <div class="tabbar_right">
        <el-switch v-model="dark" class="mt-2" style="margin-left: 24px" inline-prompt :active-icon="Sunny"
            :inactive-icon="Moon" @change="changeDark" />
    </div>
</template>

<script setup lang='ts'>
import { Moon, Sunny, Search } from '@element-plus/icons-vue'
import { ref } from 'vue'
//获取 setting 仓库
import { useThemeStore } from '@/store/modules/theme'
//引入操作本地存储工具方法
import { SET_STORAGE, GET_STORAGE } from '@/utils/storage'

let layOutThemeStore = useThemeStore();
let search_ipt = ref<string>('')
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
        layOutThemeStore.theme = 'dark'
        SET_STORAGE('THEME', 'dark');
    } else {
        html.className = '';
        layOutThemeStore.theme = 'light';
        SET_STORAGE('THEME', 'light');
    }
}
</script>
<style lang="scss" scoped>
.el-input {
    height: 36px;
}

::v-deep .el-input__wrapper {
    border-radius: 18px !important;
    width: 220px !important;
}

::v-deep .is-focus {
    box-shadow: 0 0 0 1px #34d399 !important;
}
</style>