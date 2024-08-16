import { defineStore } from "pinia";
import { ref } from "vue";
import { randomList } from "@/utils/index";
// 倒入专属歌单接口
import {
  useExclusivePlaylist,
  useRecommendedMusic,
  useRecommendedMv,
  useExclusivetList,
  useRecommendationStation,
  useOfficialList,
} from "@/api/index";
// 倒入专属歌单类型
import type {
  ExclusivePlaylist,
  RecommendedMusic,
  RecommendedMv,
} from "@/api/types/recommended";
//倒入 音乐馆 接口类型
import {
  ExclusivetList,
  RecommendationStation,
  OfficialList,
} from "@/api/types/musicHall";

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

  /**音乐馆 */
  // 独家放送
  const exclusiveMusicData = ref<ExclusivetList[]>([]);
  const getExclusiveMusicData = async () => {
    if (exclusiveMusicData.value.length) return;
    exclusiveMusicData.value = await useExclusivetList(4);
  };

  //推荐电台
  const recommendationStationData = ref<RecommendationStation[]>([]);
  const getRecommendationStationData = async () => {
    if (exclusiveMusicData.value.length) return;
    recommendationStationData.value = await useRecommendationStation();
  };

  //音乐馆-排行
  const officialListData = ref<OfficialList[]>([]);
  const getOfficialListData = async () => {
    if (officialListData.value.length) return;
    officialListData.value = await useOfficialList();
  };

  return {
    exclusivePlaylistData,
    getExclusivePlaylistData,

    recommendedMusicData,
    getRecommendedMusicData,

    recommendedMvData,
    getRecommendedMvData,

    exclusiveMusicData,
    getExclusiveMusicData,

    recommendationStationData,
    getRecommendationStationData,

    officialListData,
    getOfficialListData,
  };
});
