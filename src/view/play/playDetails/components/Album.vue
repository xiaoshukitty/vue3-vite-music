<template>
    <div class="album">
        <div class="album_list" v-for="(item, index) in albumList" :key="index">
            <div class="album_item" @click="routerPush('albums', item.id)">
                <PlaylistModule :imgSrc="item.picUrl"></PlaylistModule>
                <div class="fs_14">{{ item.name }}</div>
                <div class="fs_14 color">{{ useTimestamp(item.publishTime) }}</div>
            </div>
        </div>
    </div>
    <div class="loading_btn" v-if="albumList.length > 0 && !pageData.noMore">
        <el-button type="success" :loading="pageData.loading" link @click="loadMore">加载更多</el-button>
    </div>
</template>

<script setup lang='ts'>
import { useArtistAlbum } from '@/api/index'
import type { AlbumArtistDetail } from '@/api/types/artistDetail'
import { computed, onMounted, reactive, ref } from 'vue';
import PlaylistModule from '@/components/common/PlaylistModule/index.vue'
import { useTimestamp } from '@/utils/index'
import { useRouter } from "vue-router";

const props = defineProps<{ id: number }>()

//倒入路由模块
const router = useRouter()
const pageData = reactive({
    limit: 20, //一页多少条
    page: 1,//多少页
    loading: false,//是否开启loading
    noMore: false,//是否加载更多
})
const albumList = ref<AlbumArtistDetail[]>([]);
const offset = computed(() => {
    if (pageData.page == 1) return;
    return albumList.value.length + pageData.limit;
})

//获取数据
const getALbumData = async () => {
    try {
        pageData.loading = true
        const { hotAlbums } = await useArtistAlbum(props.id, pageData.limit, offset.value);
        if (pageData.page === 1) {
            albumList.value = hotAlbums
        } else {
            albumList.value.push(...hotAlbums)
        }
        if (hotAlbums.length < pageData.limit) {
            pageData.noMore = true
        }
    } catch (err) {
        pageData.page--
    }
    pageData.loading = false
}

//跳转
const routerPush = (name: string, id: number) => {
    router.push({ path: name, query: { id: id } })
}

//加载一下页数据
const loadMore = () => {
    pageData.page++;
    getALbumData();
}

onMounted(async () => {
    await getALbumData()
})
</script>
<style scoped lang="scss">
.album {
    display: flex;
    flex-wrap: wrap;
    width: 100%;

    .album_list {
        width: 19%;
        margin-right: 1%;

        .album_item {
            .fs_14 {
                font-size: 14px;
                margin-top: 7px;

                &:nth-child(3) {
                    font-size: 12px;
                    margin-bottom: 10px;
                }
            }

            .color {
                --tw-text-opacity: 1;
                color: rgb(148 163 184 / var(--tw-text-opacity));
            }
        }
    }


}

.loading_btn {
    margin-top: 10px;
    text-align: center;
}
</style>