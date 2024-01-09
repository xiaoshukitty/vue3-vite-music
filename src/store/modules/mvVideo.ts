import { defineStore } from "pinia";
import { useVideoGroupList } from "@/api/mvApi/index";
import type { VideoGroup } from "@/api/types/mvApi";
import { ref } from "vue";

export const useMvVideoStore = defineStore("useMvVideoStore", () => {
  //全部视频 popover 列表
  const mvVideoList = ref<VideoGroup[]>([]);
  const getMvVideoList = async () => {
    if (mvVideoList.value.length) return;
    mvVideoList.value = await useVideoGroupList();
  };

  return {
    mvVideoList,
    getMvVideoList,
  };
});
