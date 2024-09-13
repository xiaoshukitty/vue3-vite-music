<template>
    <div class="tabbar_left">
        <NextPage></NextPage>
        <SongSearch></SongSearch>
    </div>
    <div class="tabbar_right">
        <LoginClick></LoginClick>
        <el-switch ref="elSwitch" v-model="dark" class="mt-2" style="margin-left: 24px" inline-prompt
            :active-icon="Sunny" :inactive-icon="Moon" @click="changeDark" />
    </div>
</template>

<script setup lang='ts'>
import SongSearch from '@/components/common/SongSearch/index.vue'
import NextPage from '@/components/common/NextPage/index.vue'
import LoginClick from './components/LoginClick.vue'
import { Moon, Sunny } from '@element-plus/icons-vue'
import { ref } from 'vue'
//获取 setting 仓库
import { useThemeStore } from '@/store/modules/theme'
//引入操作本地存储工具方法
import { SET_STORAGE, GET_STORAGE } from '@/utils/storage'

let layOutThemeStore = useThemeStore();

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

const changeDark = (event: MouseEvent) => {
    const transition = (document as Document).startViewTransition(() => {
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
    });

    //开关按钮的坐标
    const x = event.clientX;
    const y = event.clientY;

    //计算开关按钮到页面对角的距离(半径)
    const tragetRadius = Math.hypot(
        Math.max(x, window.innerWidth - x),
        Math.max(y, window.innerHeight - y)
    )
    console.log('tragetRadius----', tragetRadius);

    transition.ready.then(() => {
        //过渡动画结束
        //第一个参数是关键帧，第二个参数是可选项
        document.documentElement.animate({
            // 裁剪路径，中心圆点从 0% 到 100% 
            clipPath: [
                `circle(0% at ${x}px ${y}px)`,
                `circle(${tragetRadius}px at  ${x}px ${y}px)`
            ],
        }, {
            duration: 1000,
            pseudoElement: '::view-transition-new(root)'
        })
    })

}

</script>
<style lang="scss" scoped>
.tabbar_left {
    display: flex;
    align-items: center;
}

.tabbar_right {
    display: flex;
    align-items: center;
}

::view-transition-new(root),
::view-transition-old(root) {
    animation: none !important;
}
</style>