<template>
    <div class="exclusive">
        <el-space style="width: 100%" fill>
            <el-skeleton class="skelton" animated :count="1" :loading="skeletonLoading">
                <template #template>
                    <el-skeleton-item variant="h3" class="skelton-title" />
                </template>
                <template #default>
                    <Title :title="'独家放送'" />
                </template>
            </el-skeleton>
            <el-skeleton class="skelton" animated :count="1" :loading="skeletonLoading">
                <template #template>
                    <div class="skelton-img">
                        <div class="skelton-img1" v-for="(item, index) in 4" :key="index">
                            <el-skeleton-item variant="image" class="skelton-img2" />
                            <el-skeleton-item variant="h3" style="width: 100%; margin-top: 5px;" />
                        </div>
                    </div>
                </template>
                <template #default>
                    <div class="list">
                        <div class="item" v-for="item in exclusiveMusicData" :key="item.id">
                            <PlaylistModule :imgSrc="item.picUrl"></PlaylistModule>
                            <span style="font-size: .75rem;">{{ item.name }}</span>
                        </div>
                    </div>
                </template>
            </el-skeleton>
        </el-space>
    </div>
</template>
<script setup lang='ts'>
import PlaylistModule from '@/components/common/PlaylistModule/index.vue'
import useUserStore from '@/store/modules/user';
import { toRefs, onMounted } from 'vue'
import { useMusicStore } from '@/store/modules/music'

const { exclusiveMusicData } = toRefs(useMusicStore());
const { getExclusiveMusicData } = useMusicStore();
const { skeletonLoading } = toRefs(useUserStore());

onMounted(async () => {
    await getExclusiveMusicData()
})

</script>
<style scoped lang="scss">
.exclusive {
    .list {
        width: 100%;
        display: flex;

        .item {
            width: 24%;
            margin-right: 1%;

            img {
                width: 100%;
                height: 180px;
                border-radius: 10px;
                object-fit: inherit;
            }
        }
    }

    .skelton {
        .skelton-title {
            height: 24px;
            margin: 20px 0 5px;
        }

        .skelton-img {
            display: flex;
            width: 100%;

            .skelton-img1 {
                height: 142px;
                width: 24%;
                border-radius: 10px;
                margin-right: 1%;

                .skelton-img2 {
                    height: 135px;
                }
            }
        }
    }

}
</style>