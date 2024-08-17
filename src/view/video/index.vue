<template>
    <div style="padding: 20px;">
        <el-popover placement="bottom-end" :width="1000" trigger="hover" v-model:visible="showVideo">
            <template #reference>
                <el-space style="" fill>
                    <el-skeleton class="skelton" animated :count="1" :loading="skeletonLoading">
                        <template #template>
                            <el-skeleton-item variant="h3" class="skelton-title" />
                        </template>
                        <template #default>
                            <el-button plain round>
                                <div > 
                                    <span >全部视频</span>
                                    <el-icon>
                                        <ArrowRight />
                                    </el-icon>
                                </div>
                            </el-button>
                        </template>
                    </el-skeleton>
                </el-space>
            </template>
            <el-scrollbar height="440px" style="padding: 20px;">
                <div class="mv_container">
                    <div class="mv_title mv_hover" @click="selectVideo(0)">全部视频</div>
                    <div class="mv_list">
                        <div class="mv_item" v-for="item in mvVideoList" :key="item.id">
                            <span class="mv_span mv_hover" @click="selectVideo(item.id)">{{ item.name }}</span>
                        </div>
                    </div>
                </div>
            </el-scrollbar>
        </el-popover>

        <MvVideo :mvVideoData="mvVideoData" :skeletonLoading="skeletonLoading"></MvVideo>
    </div>
</template>

<script setup lang='ts'>
import { onMounted, reactive, ref, toRefs } from 'vue';
import MvVideo from './components/ MvVideo.vue'
import { useMvVideoStore } from '@/store/modules/mvVideo'
import type { Video } from "@/api/types/mvApi";
import { useVideoGroup } from "@/api/mvApi/index";
import useUserStore from '@/store/modules/user';

const { getMvVideoList } = useMvVideoStore();
const { mvVideoList } = toRefs(useMvVideoStore());
const { skeletonLoading } = toRefs(useUserStore());
const mvVideoData = ref<Video[]>([]);
const showVideo = ref<boolean>(false);
const pageInfo = reactive({
    page: 1,
    id: 0,
});


const selectVideo = (id: number) => {
    pageInfo.id = id;
    pageInfo.page = 1;
    getMvVideoData();
    setTimeout(() => {
        showVideo.value = false;
    }, 500)
};
const getMvVideoData = async () => {
    console.log(pageInfo.id, pageInfo.page - 1);

    mvVideoData.value = await useVideoGroup(pageInfo.id, pageInfo.page - 1);
}

onMounted(() => {
    getMvVideoData();
    getMvVideoList();

})

</script>
<style scoped lang="scss">
.mv_container {

    .mv_title {
        font-size: 20px;
        cursor: pointer;
    }

    .mv_list {
        display: flex;
        flex-wrap: wrap;

        .mv_item {
            width: 20%;
            margin-top: 20px;

            .mv_span {
                cursor: pointer;
            }
        }
    }

    .mv_hover:hover {
        color: $base-fontSize-color;
    }
}

::v-deep .el-scrollbar {
    padding: 20px;
}

.skelton-title {
    width: 120px;
    height: 32px;
    padding: 20px;
}
</style>