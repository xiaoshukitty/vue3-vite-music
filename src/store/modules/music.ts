import { defineStore } from "pinia";
import { ref } from "vue";
import { randomList } from "@/utils/index";
// 倒入专属歌单接口
import {
  useExclusivePlaylist,
  useRecommendedMusic,
  useRecommendedMv,
} from "@/api/index";
// 倒入专属歌单类型
import type {
  ExclusivePlaylist,
  RecommendedMusic,
  RecommendedMv,
} from "@/api/types";

export const useMusicStore = defineStore("useMusicStore", () => {
  // 专属音乐
  const exclusivePlaylistData = ref<ExclusivePlaylist[]>([]);
  const getExclusivePlaylistData = async () => {
    if (exclusivePlaylistData.value.length) return;
    let listData = await useExclusivePlaylist();

    exclusivePlaylistData.value = randomList(listData, 10);
  };

  //推荐新音乐
  const recommendedMusicData = ref<RecommendedMusic[]>([]);
  const getRecommendedMusicData = async () => {
    if (recommendedMusicData.value.length) return;
    recommendedMusicData.value = await useRecommendedMusic();
  };

  //推荐MV
  const recommendedMvData = ref<RecommendedMv[]>([]);
  const getRecommendedMvData = async () => {
    if (recommendedMvData.value.length) return;
    recommendedMvData.value = await useRecommendedMv();
  };

  return {
    exclusivePlaylistData,
    getExclusivePlaylistData,

    recommendedMusicData,
    getRecommendedMusicData,

    recommendedMvData,
    getRecommendedMvData,
  };
});
