<template>
    <div class="music">
        <h1>音乐馆</h1>
        <el-affix :offset="56">
            <div :class="{ isBg: 'tabs_bg' }">
                <el-tabs v-model="currentMenu">
                    <el-tab-pane v-for=" menu  in  menus " :key="menu.name" :label="menu.label" :name="menu.name"
                        class="text-main" />
                </el-tabs>
            </div>

        </el-affix>
        <div>
            <Ranking v-if="currentMenu === 'Ranking'"></Ranking>
            <ClassifiedPlaylist v-if="currentMenu === 'ClassifiedPlaylist'"></ClassifiedPlaylist>
            <Winnow v-if="currentMenu === 'Winnow'"></Winnow>
            <Singer v-if="currentMenu === 'Singer'"></Singer>
        </div>
    </div>
</template>

<script setup lang='ts'>
import Ranking from './components/Ranking/index.vue'
import ClassifiedPlaylist from './components/ClassifiedPlaylist/index.vue'
import Winnow from './components/Winnow/index.vue'
import Singer from './components/Singer/index.vue'

// import { watch } from 'vue'
import { useMusicMenu } from "./music";
// import useLayOutSettingStore from '@/store/modules/setting'

const { menus, currentMenu } = useMusicMenu()
// const { theme } = useLayOutSettingStore()
// console.log('theme---', theme);

// watch(() => theme, (newValue, oldValue) => {
//     console.log(`count从${oldValue}变成了${newValue}`)
// })


</script>
<style lang="scss" scoped>
.music {
    h1 {
        font-weight: 700;
        font-size: 40px;
    }

    ::v-deep .el-tabs__nav-wrap::after {
        height: 0;
    }

    .tabs_bg {
        background-color: #fff;
    }
}
</style>