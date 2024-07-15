<template>
    <div class="lyricInfo">
        <!-- <div v-for="(item, index) in lyricInfo" :key="index">
            <div ref="" class="text" :class="convertToHMS(playBlackTime) == item.time ? 'text_color' : ''">
                <span>{{ item.msg }}</span>
            </div>
        </div> -->
        <div ref="lyricDiv" class="lyrics">
            <ul ref="lyric" style="transition: .3s">
                <div class="text" v-for='(item, index) in lyricInfo' :key="index" :data-index='index'
                    :class="{ text_color: lyricIndex === index }">
                    {{ item.msg }}
                </div>
            </ul>
        </div>
    </div>
</template>

<script setup lang='ts'>
import { toRefs, onMounted, ref, watch } from 'vue'
import { usePlaySong } from '@/store/modules/playSong'
import { convertToHMS } from '@/utils/index'

const { lyricData, playBlackTime } = toRefs(usePlaySong())
const lyricInfo = ref([])
const Idx = ref<number>(0);
let flag: boolean = true // 判断当前高亮的索引是否已经超过了歌词数组的长度
const lyric = ref<any>(null) // dom -  包含歌词标签的ul，高度很高，主要用于控制transform
const lyricIndex = ref<number>(0) // 当前高亮歌词的索引，与span标签里的index进行比较，判断是否高亮
let scrollHeight: number = 0 // 歌词区域要滚动的高度
let lyricHeight: number = 0 // 歌词区域最外层区域高度，也就是lyricDiv的高度
const lyricDiv = ref<any>(null) // dom - 高度固定的外层div，主要用于html结构
let lyricDomArr

onMounted(() => {
    // lyricInfo.value = formatLyric(lyricData.value.lrc.lyric)
    getWord(lyricData.value.lrc.lyric)
    // console.log('歌词', lyricInfo.value);
    // 获取span标签数组
    lyricDomArr = lyric.value.querySelectorAll('span')
    // 获取固定歌词区域高度的一半 用来让高亮歌词始终居中
    lyricHeight = lyricDiv.value.offsetHeight / 2
})

interface ObjType {
    time: string,
    text?: string
}

interface ILyric {
    time: number,
    msg: string,
    time1: string
}

const handleLyricTransform = (currentTime: number): void => {
   

    let item: ILyric = lyricInfo.value[Idx.value];

    if (flag && currentTime.value > item.time) {
        // 实时获取dom，不然在上一首/下一首切换时，dom不会更新 
        lyricDomArr = lyric.value.querySelectorAll('div')

        // 拿到当前正在播放的歌词span的索引
        const index = parseInt(lyricDomArr[Idx.value].dataset.index);

   
        // console.log('index---', lyricDomArr[Idx.value].dataset.index);
        // console.log('Idx---', Idx.value);

        if (Idx.value === index) {
            lyricIndex.value = Idx.value
            // console.log('lyricIndex---', lyricIndex.value);

            Idx.value += 1
            if (Idx >= lyricDomArr.length) {
                flag = false
                return
            }
            scrollHeight += lyricDomArr[Idx.value].offsetHeight

            if (lyric.value) {
                lyric.value.style.transform = `translateY(${lyricHeight - scrollHeight}px)`
            }
        } else {

        }
    }
}



const formatLyric = (text: string) => {
    let arr = text.split("\n"); //原歌词文本已经换好行了方便很多，我们直接通过换行符“\n”进行切割
    let row = arr.length; //获取歌词行数
    let lyric_list: any = []
    console.log('--歌词---', arr);
    for (let i = 0; i < row; i++) {
        let temp_row = arr[i]; //现在每一行格式大概就是这样"[00:04.302][02:10.00]hello world";
        let temp_arr = temp_row.split("]");//我们可以通过“]”对时间和文本进行分离
        let text1 = temp_arr.pop(); //把歌词文本从数组中剔除出来，获取到歌词文本了！
        //再对剩下的歌词时间进行处理
        temp_arr.forEach(element => {
            let obj = {} as ObjType;
            let timeCopy = element.substr(1, element.length - 1).split("[");
            obj.time = timeCopy[0].split('.')[0]
            obj.text = text1;
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
const getWord = async (text: string) => {
    let arr = text.split(/\n/gi);
    arr.length = arr.length - 1 // 处理最后一次换行为空
    let songWord = arr.map((v) => {
        let idx = v.indexOf(']')
        let time1 = v.slice(1, idx).trim().split(':')
        let time = Number((Number(time1[0]) * 60 + Number(time1[1])).toFixed(3))
        let msg = v.slice(idx + 1).trim()
        return {
            time1: v.slice(1, idx).trim(),
            time,
            msg
        }
    })
    songWord.forEach((v, i, arr) => { // 处理歌词为空
        if (v.msg === '') {
            arr.splice(i, 1)
        }
    })
    console.log('--歌词---', songWord);
    lyricInfo.value = songWord;
}

watch(() => playBlackTime, (newValue: any, oldValue: any) => {
    // 当store.items数组变化时，这个函数会被调用
    handleLyricTransform(newValue)
}, {
    deep: true // 确保深度监听
});




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
        margin: 10px 0;
    }
}



.text_color {
    color: red !important;
    font-size: 20px;
}
</style>