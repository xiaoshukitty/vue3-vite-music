<template>
    <template v-for="(item) in menuList" :key="item.path">
        <div v-if="!item.meta.hidden" @click="goRoute(item)" class="menu_list">
            <div :class="item.redirect == $route.path ? 'menu_item menu_select' : 'menu_item'">
                <el-icon>
                    <component :is="item.meta.icon"></component>
                </el-icon>
                <span style="margin-left: 7px;">{{ item.meta.title }}</span>
            </div>
        </div>
    </template>
</template>

<script setup lang="ts">
import { useRouter, useRoute } from 'vue-router';
//获取父组件传递过来的全部路由数组
defineProps(['menuList']);


//获取路由对象
let $router = useRouter();
let $route = useRoute();


// console.log('$router---', $route);

// console.log('menuList---', menuList);
//点击菜单回调
const goRoute = (val: any) => {
    // console.log('val--', val);

    // 路由跳转
    $router.push(val.path)

}

</script>

<script lang="ts">
export default {
    name: 'Menu',//递归组件加的name(必须要加)
}
</script>

<style scoped lang="scss">
.menu_list {
    height: 40px;
    margin-bottom: 5px;
    line-height: 40px;
    border-radius: 5px;
    color: rgb(248 250 252 / var(--tw-text-opacity));
}

.menu_item {
    height: 40px;
    line-height: 40px;
    padding-left: 10px;
    border-radius: 5px;
    --tw-text-opacity: 1;
    color: rgb(51 65 85 / var(--tw-text-opacity));
    display: flex;
    align-items: center;
}

.menu_select {
    background-image: linear-gradient(to right, var(--tw-gradient-stops));
    --tw-gradient-from: #2dd4bf;
    --tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to, rgb(45 212 191 / 0));
    --tw-gradient-to: #34d399;
    --tw-text-opacity: 1;
    color: #fff;
}

.menu_item:hover {
    cursor: pointer;
    --tw-bg-opacity: 1;
    background-color: rgb(229 231 235 / var(--tw-bg-opacity)) !important;

}
</style>