<template>
    <div class="layout_container">
        <!-- 左侧菜单 -->
        <div class="layout_slider" :class="{ fold: LayOutSettingStore.fold ? true : false }">
            <!-- 展示菜单 -->
            <!-- 滚动组件 -->
            <el-scrollbar class="scrollbar">
                <!-- 菜单组件 -->
                <Menu :menuList="useStore.menuRoutes"></Menu>
            </el-scrollbar>
        </div>
        <!-- 顶部导航 -->
        <div class="layout_tabbar" :class="{ fold: LayOutSettingStore.fold ? true : false }">
            <!-- layout组件顶部 tabbar 组件 -->
            <Tabbar></Tabbar>
        </div>
        <!-- 内容展示 -->
        <div class="layout_main" :class="{ fold: LayOutSettingStore.fold ? true : false }">
            <Main />
            <div style="height: 70px;"></div>
        </div>
        <!-- 播放组件 -->
        <div class="paly_back">
            <PlayBack></PlayBack>
        </div>
    </div>
</template>

<script setup lang='ts'>
//引入菜单组件
import Menu from './menu/index.vue'
//引入右侧内容展示组件(二级路由)
import Main from './main/index.vue'
// 引入 tabbar组件
import Tabbar from './tabbar/index.vue'
import PlayBack from '@/components/common/PlayBack/index.vue'

//获取用户相关的小仓库路由
import useUserStore from '@/store/modules/user'
//获取 layout相关配置的仓库
import useLayOutSettingStore from '@/store/modules/setting'

let LayOutSettingStore = useLayOutSettingStore();
let useStore = useUserStore();

</script>
<script lang="ts">
export default {
    name: "Layout"
}
</script>
<style scoped lang="scss">
.layout_container {
    width: 100%;
    height: 100vh;

    .layout_slider {
        width: $base-menu-width;
        height: 100vh;
        // background-color: $base-menu-background;
        padding: 30px 20px;
        color: #fff;
        transition: all .3s;
        border-right: 1px solid #eee;

        .scrollbar {
            width: 100%;
            height: calc(100vh - $base-menu-logo-height);

            .el-menu {
                border-right: none;
            }
        }

        &.fold {
            width: $base-menu-min-width;
        }
    }

    .layout_tabbar {
        position: fixed;
        width: calc(100% - $base-menu-width);
        height: $base-tabbar-height;
        top: 0;
        left: $base-menu-width;
        transition: all .3s;
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 0 20px;
        border-bottom: 1px solid #eee;

        &.fold {
            width: calc(100vw - $base-menu-min-width);
            left: $base-menu-min-width;
        }
    }

    .layout_main {
        position: absolute;
        width: calc(100% - $base-menu-width);
        height: calc(100vh - $base-tabbar-height);
        left: $base-menu-width;
        top: $base-tabbar-height;
        // padding: 20px;
        overflow: auto;
        transition: all .3s;

        &.fold {
            width: calc(100vw - $base-menu-min-width);
            left: $base-menu-min-width;
        }
    }

    .paly_back {
        position: fixed;
        bottom: 0;
        left: $base-menu-width;
        width: calc(100% - $base-menu-width);
    }
}
</style>