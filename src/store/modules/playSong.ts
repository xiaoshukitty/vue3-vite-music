import { defineStore, storeToRefs } from "pinia";
import { useSongUrl, useDetail } from "@/api/index";
import type { SongUrl, Song } from "@/api/types/index";
import { onMounted, onUnmounted, watch } from "vue";

const keys = {
  AUDIO: "PLAY-AUDIO",
};

export const usePlaySong = defineStore({
  id: "usePlayerStore",
  state: () => ({
    audio: new Audio(), //创建音频
    isPause: true, //是否暂停
    isPlaying: false, //是否播放中
    id: 0,
    songUrl: {} as SongUrl, //音乐数据
    song: {} as Song,
    url: "", //音频地址
    playList: [] as Song[], //播放列表,
    audioLength: 0, //音频长度
    playBlackTime: 0, //当前播放时间
    endPlay: false, //是否播放结束
    audioSlider: Number(localStorage.getItem(keys.AUDIO)) || 60, //音量
    loopType: 0, //循环模式 0 单曲循环 1 列表循环 2随机播放  播放模式
    dragSliderInput: false, //是否拖动进度条
    drawer: false, //歌单列表抽屉组件开关
  }),
  getters: {},
  actions: {
    //播放、暂停
    playBackMusic() {
      console.log("this.song---", this.song);

      if (!this.song.id) return;
      console.log("是否播放中", this.isPlaying);
      console.log("是否暂停", this.isPause);
      this.isPlaying = !this.isPlaying;
      if (this.isPlaying) {
        // 不是播放
        this.isPause = false;
        this.audio.play();
      } else {
        //是播放
        this.isPause = true;
        this.audio.pause();
      }
    },
    //上一首
    previousSong() {
      console.log("上一首");
    },
    //下一首
    nextSong() {
      console.log("下一首");
    },
    //点击播放
    async playMusic(id: number) {
      if (id == this.id) return;
      this.isPlaying = false;
      this.isPause = true;
      const data = await useSongUrl(id);
      this.audio.src = data.url;
      this.audio
        .play()
        .then((res) => {
          this.isPlaying = true;

          this.isPause = false;
          this.songUrl = data;
          this.url = data.url;
          this.id = id;
          this.songDetail();
        })
        .catch((res) => {
          console.log(res);
        });
    },
    async songDetail() {
      console.log("11122");

      this.song = await useDetail(this.id);
      this.pushPlayList(false, this.song);
    },
    //播放列表里面添加音乐
    pushPlayList(replace: boolean, ...list: Song[]) {
      if (replace) {
        this.playList = list;
        return;
      }
      list.forEach((song) => {
        if (this.playList.filter((s) => s.id == song.id).length <= 0) {
          this.playList.push(song);
        }
      });
      console.log("playList----", this.playList);
    },

    sliderChange(val: number) {
      console.log("val---", val);

      this.dragSliderInput = false;
      this.playBlackTime = val; //拖动播放的时间
      this.audio.currentTime = val; //拖动播放的时间
    },
    //拖动 el-slider 事件
    sliderInput() {
      this.dragSliderInput = true; //拖动了进度条
    },

    //定时器
    interval() {
      if (this.isPlaying && !this.dragSliderInput) {
        this.playBlackTime = parseInt(this.audio.currentTime.toString());
        this.audioLength = parseInt(this.audio.duration.toString());
        this.endPlay = this.audio.ended;
      }
    },
    //音量设置
    setAudioSlider(n: number) {
      n = n > 100 ? 100 : n;
      n = n < 0 ? 0 : n;
      this.audioSlider = n;
      this.audio.volume = n / 100;
      localStorage.setItem("PLAY-AUDIO", n.toString());
    },
    //初始化
    init() {
      this.audio.volume = Number(this.audioSlider) / 100;
    },
    //播放结束
    playEnd() {
      switch (this.loopType) {
        case 0:
          this.rePlay();
          break;
        case 1:
          this.nextSong();
          break;
        case 2:
          this.randomPlay();
          break;
      }
    },
    //随机播放
    randomPlay() {
      //   this.playMusic(this.playList.sample().id);
    },
    //重新播放
    rePlay() {
      setTimeout(() => {
        this.playBlackTime = 0;
        this.audio.play();
      }, 1500);
    },
  },
});

export const userPlayerInit = () => {
  let timer: any;
  const { init, interval, playEnd } = usePlaySong();
  const { endPlay } = storeToRefs(usePlaySong());
  //监听播放结束
  watch(endPlay, (endPlay) => {
    if (!endPlay) return;
    playEnd(); //播放完调用
  });
  //启动定时器
  onMounted(() => {
    init();
    timer = setInterval(interval, 1000);
    console.log("启动定时器");
  });
  //清除定时器
  onUnmounted(() => {
    console.log("清除定时器");
    clearInterval(timer);
  });
};
