<template>
    <div class="mv">
        <div class=mv_list>
            <div class="mv_item" v-for="(item, index) in list" :key="index" @click.stop="goToBack('mvDetail', item.id)">
                <PlaylistModule :imgSrc="item.imgurl16v9"></PlaylistModule>
                <div class="mv_name">{{ item.name }}</div>
            </div>
        </div>
        <div class="loading_btn" v-if="list.length > 0 && !pageData.noMore">
            <el-button type="success" :loading="pageData.loading" link @click="loadMore">加载更多</el-button>
        </div>
    </div>
</template>

<script setup lang='ts'>
import PlaylistModule from '@/components/common/PlaylistModule/index.vue'
import { computed, onMounted, reactive, ref } from 'vue'

import { useArtistMv } from '@/api/index'
import type { Mv } from '@/api/types/songMv'

import { useRouter } from "vue-router";

const router = useRouter()
const props = defineProps<{ id: number }>()
const list = ref<Mv[]>([]);
const pageData = reactive({
    limit: 10,
    page: 1,
    loading: false,
    noMore: false,
})
const offset = computed(() => {
    if (pageData.page === 1) return 0;
    return list.value.length + pageData.limit
})

const getData = async () => {
    try {
        pageData.loading = true
        const { mvs } = await useArtistMv(props.id, pageData.limit, offset.value)
        if (pageData.page === 1) {
            list.value = mvs
        } else {
            list.value.push(...mvs)
        }
        if (mvs.length < pageData.limit) pageData.noMore = true;

    } catch (e) {
        pageData.page--
    }
    pageData.loading = false

}

const loadMore = () => {
    pageData.page++
    getData()
}


const goToBack = (name: string, id: number) => {
    router.push({ path: name, query: { id: id } })
}

onMounted(async () => {
    await getData()
})
</script>
<style scoped lang="scss">
.mv {
    font-size: .75rem;

    .mv_list {
        flex-wrap: wrap;
        display: flex;

        .mv_item {
            width: 24%;
            margin-right: 1%;

            img {
                width: 100%;
            }

            & div:nth-child(3) {
                font-size: 80%;
                color: rgb(148, 163, 184);
                margin-top: 5px;
            }

            .mv_name {
                margin: 8px 0 15px;
            }
        }

        .mv_item:nth-child(4n) {
            margin-right: 0;
        }
    }

    .loading_btn {
        margin-top: 10px;
        text-align: center;
    }
}
</style>