<template>
    <div class="lyricInfo">
        <div v-for="(item, index) in lyricInfo" :key="index">
            <div class="text" :class="convertToHMS(playBlackTime) == item.time ? 'text_color' : ''">
                <!-- <span>{{ convertToHMS(playBlackTime) }} ++++ </span>
                <span>{{ item.time }}=====</span> -->
                <span>{{ item.text }}</span>
            </div>
        </div>
    </div>
</template>

<script setup lang='ts'>
import { toRefs, onMounted, ref, watch } from 'vue'
import { usePlaySong } from '@/store/modules/playSong'
import { convertToHMS } from '@/utils/index'

const { lyricData, playBlackTime } = toRefs(usePlaySong())
const lyricInfo = ref([])
const lyricIndex = ref(0) // 歌词初始位置

onMounted(() => {
    lyricInfo.value = formatLyric(lyricData.value.lrc.lyric)
    console.log('歌词----', lyricInfo.value);

})

const formatLyric = (text: string) => {
    let arr = text.split("\n"); //原歌词文本已经换好行了方便很多，我们直接通过换行符“\n”进行切割
    let row = arr.length; //获取歌词行数
    let lyric_list: any = []
    console.log('--歌词---', arr);
    for (let i = 0; i < row; i++) {
        let temp_row = arr[i]; //现在每一行格式大概就是这样"[00:04.302][02:10.00]hello world";
        let temp_arr = temp_row.split("]");//我们可以通过“]”对时间和文本进行分离
        let text = temp_arr.pop(); //把歌词文本从数组中剔除出来，获取到歌词文本了！
        //再对剩下的歌词时间进行处理
        temp_arr.forEach(element => {
            let obj = {};
            let timeCopy = element.substr(1, element.length - 1).split("[");
            obj.time = timeCopy[0].split('.')[0]
            obj.text = text;
            lyric_list.push(obj); //每一行歌词对象存到组件的lyric歌词属性里
        });
        lyric_list.sort(sortRule);
        // this.$store.commit("setLyric", this.lyric); //把歌词提交到store里，为了重新进入该组件时还能再次渲染
    }
    return lyric_list
}
const sortRule = (a: any, b: any) => { //设置一下排序规则
    return a.time - b.time;
}

</script>
<style scoped lang="scss">
.lyricInfo {
    height: calc(100vh - 166px);
    overflow: hidden;
    overflow-y: auto;
    text-align: center;

    &>div {
        margin: 10px 0;
    }

    .text {
        color: #7e7e7e;
    }
}



.text_color {
    color: red !important;
    font-size: 20px;
}
</style>