<template>
    <div class="music">
        <el-space style="width: 100%" fill>
            <el-skeleton class="skelton" animated :count="1" :loading="skeletonLoading">
                <template #template>
                    <el-skeleton-item variant="h3" class="skelton-title" />
                    <div class="skelton-title-box">
                        <el-skeleton-item variant="h3" class="skelton-title1" />
                        <el-skeleton-item variant="h3" class="skelton-title1" />
                        <el-skeleton-item variant="h3" class="skelton-title1" />
                        <el-skeleton-item variant="h3" class="skelton-title1" />
                    </div>
                </template>
                <template #default>
                    <div>
                        <h1>音乐馆</h1>
                        <el-affix :offset="56">
                            <div :class="isBg ? 'tabs_bg1' : 'tabs_bg'">
                                <el-tabs v-model="currentMenu">
                                    <el-tab-pane v-for=" menu in menus " :key="menu.name" :label="menu.label"
                                        :name="menu.name" class="text-main" />
                                </el-tabs>
                            </div>
                        </el-affix>
                    </div>
                </template>
            </el-skeleton>
        </el-space>
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
import useUserStore from '@/store/modules/user'

import { watch, ref, onMounted, toRefs } from 'vue'
import { useMusicMenu } from "./music";
import { useThemeStore } from '@/store/modules/theme';

const { menus, currentMenu } = useMusicMenu()
const musicThemeStore = useThemeStore();
const { skeletonLoading } = toRefs(useUserStore());
const isBg = ref<boolean>();

onMounted(() => {
    musicThemeStore.theme == 'dark' ? isBg.value = false : isBg.value = true;
})
watch(
    () => musicThemeStore.getTheme,
    (newVal: any) => {
        newVal == 'dark' ? isBg.value = false : isBg.value = true;
    }
);

</script>
<style lang="scss" scoped>
.music {
    padding: 20px;



    h1 {
        font-weight: 700;
        font-size: 40px;
    }

    ::v-deep .el-tabs__nav-wrap::after {
        height: 0;
    }

    .tabs_bg {
        background-color: $base-dark !important;
    }

    .tabs_bg1 {
        background-color: #fff;
    }

    .skelton {

        .skelton-title {
            height: 40px;
            width: 100%;
        }

        .skelton-title-box {
            display: flex;
            margin-bottom: 15px;

            .skelton-title1 {
                width: 50px;
                height: 30px;
                margin-top: 10px;
            }

            .skelton-title1:nth-child(1) {
                margin-right: 20px;
            }

            .skelton-title1:nth-child(2) {
                margin-right: 20px;
            }

            .skelton-title1:nth-child(3) {
                margin-right: 20px;
            }

            .skelton-title1:nth-child(4) {
                margin-right: 20px;
            }
        }
    }
}
</style>