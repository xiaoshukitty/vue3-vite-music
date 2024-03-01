<template>
    <el-popover placement="bottom" :width="300" trigger="click" class="p0" v-model:visible="showSearchView">
        <template #reference>
            <el-input v-model="searchIpt" placeholder="搜索音乐、MV、歌单" clearable :prefix-icon="Search" input-style="#000"
                @input="searchInput" @focus="focusSearch">
            </el-input>
        </template>
        <el-scrollbar height="400px">
            <div class="search_list" v-if="showHot">
                <div style="font-size:16px; margin-bottom: 10px;">热门搜索</div>
                <div class="hot_list" v-for="(item, index) in searchHotList" :key="index" @click="goToHot(item.searchWord)">
                    <div class="hot_hover">{{ index + 1 }}. {{ item.searchWord }}</div>
                    <div style="color:red; margin-right:10px ;">{{ useNumberFormat(item.score) }}</div>
                </div>
            </div>
            <div v-else>
                <template v-if="suggestData">
                    <div class="" v-for="(item, index) in suggestData.order" :key="index">
                        <div class="fs_16">{{ getTitle(item) }}</div>
                        <template v-if="item === 'songs'">
                            <div v-for="itemSong in suggestData.songs" :key="itemSong.id" class="item_song dflex ellipsis"
                                @click="songsMusic(itemSong.id)">
                                <div>{{ itemSong.name }}</div>
                                <div> - {{ itemSong.artists[0].name }}</div>
                            </div>
                        </template>
                        <template v-if="item === 'artists'">
                            <div v-for="itemArtists in suggestData.artists" :key="itemArtists.id"
                                class="item_artists dflex ellipsis" @click="routerPush('playDetails', itemArtists.id)">
                                <el-avatar size="small" :src="itemArtists.img1v1Url" />
                                <div>{{ itemArtists.name }}</div>
                            </div>
                        </template>
                        <template v-if="item === 'albums'">
                            <div v-for="itemAlbums in suggestData.albums" :key="itemAlbums.id"
                                class="item_albums dflex ellipsis" @click="routerPush('albums', itemAlbums.id)">
                                <div>{{ itemAlbums.name }}</div>
                                <div> - {{ itemAlbums.artist.name }}</div>
                            </div>
                        </template>
                        <template v-if="item === 'playlists'">
                            <div v-for="itemPlaylists in suggestData.playlists" :key="itemPlaylists.id"
                                class="item_artists dflex ellipsis" @click="routerPush('playList',itemPlaylists.id)">
                                <el-avatar class="w24" size="small" :src="itemPlaylists.coverImgUrl" />
                                <div>{{ itemPlaylists.name }}</div>
                            </div>
                        </template>
                    </div>
                </template>
            </div>
        </el-scrollbar>
    </el-popover>
</template>

<script setup lang='ts'>
import { storeToRefs } from "pinia";
import { Search } from '@element-plus/icons-vue'
import { useSearchHotDetail } from '@/api/tabbar/index'
import type { SearchHotDetail } from '@/api/types/tabbar'
import { useSearchStore } from "@/store/modules/search"
import { useNumberFormat } from '@/utils/index'
import { usePlaySong } from '@/store/modules/playSong'
import { ref, onMounted } from 'vue'
import { useRouter } from "vue-router";
// 倒入 lodash 中的防抖
import { debounce } from 'lodash'

const searchHotList = ref<SearchHotDetail[]>([])

const { showSearchView, searchIpt, showHot, suggestData } = storeToRefs(useSearchStore())
const { suggest } = useSearchStore()
//倒入路由模块
const router = useRouter()
//拿播放时间
const { playMusic } = usePlaySong();
//搜索 防抖
// const searchInput = debounce((value: string | number) => suggest(), 500, {'maxWait': 1000})
const searchInput = debounce(() => suggest(), 500, { 'maxWait': 1000 })

//搜索热门
const goToHot = (val: string) => {
    searchIpt.value = val;
    suggest()
    showSearchView.value = true
}

//获取焦点展示 popover 弹框
const focusSearch=() => {
    setTimeout(()=>{
        showSearchView.value = false;
    },0)
}

//点击直接播放音乐
const songsMusic =(id:number)=>{
    playMusic(id)
    showSearchView.value = false;
}

//跳转
const routerPush = (name: string, id: number) => {
    router.push({ path: name, query: { id: id } }).then(() => {
        showSearchView.value = false;
    })
}

//获取 热门数据接口
onMounted(async () => {
    searchHotList.value = await useSearchHotDetail();
    console.log('searchHotList--', searchHotList);

})


//搜索歌单的类型
const getTitle = (name: string) => {
    switch (name) {
        case 'songs':
            return '单曲';
        case 'albums':
            return '专辑';
        case 'artists':
            return '歌手';
        case 'playlists':
            return '歌单';
        default:
            return name;
    }
}

</script>
<style scoped lang="scss">
.search_list {
    padding: 14px;

    .hot_list {
        cursor: pointer;
        display: flex;
        justify-content: space-between;
        margin-top: 20px;
    }

    .hot_list:hover .hot_hover {
        color: $base-fontSize-color;
    }
}

.dflex {
    display: flex;
    align-items: center;
    padding: 7px 14px;
}

.item_song,
.item_albums {

    & div:nth-child(1) {
        color: $base-fontSize-color;
    }
}

.item_artists {
    div {
        margin-left: 10px;
        flex: 1;
    }
}

.w24 {
    flex: 0 0 24px;
}

.ellipsis {
    // width: 260px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
}

.dflex:hover {
    --tw-bg-opacity: 1;
    background-color: rgb(229 231 235 / var(--tw-bg-opacity));
    cursor: pointer;
}

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

.fs_16 {
    font-size: 16px;
    margin: 7px 0;
    padding: 14px 14px 0 14px;
}
</style>


<style>
.el-popover {
    padding: 0 !important;
    /* inset: 56.5px auto auto 220px !important; */
}
</style>
