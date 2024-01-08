import { defineStore } from "pinia";

import { useVideoGroup } from "@/api/mvApi/index";
import type { Video } from "@/api/types/mvApi";
import { ref, reactive } from "vue";

export const useMvVideoStore = defineStore("useMvVideoStore", () => {
  //全部视频
  const pageInfo = reactive({
    page: 1,
    id: 0,
  });
  const mvVideoData = ref<Video[]>([]);
  const getMvVideoData = async () => {
    if (mvVideoData.value.length) return;
    mvVideoData.value = await useVideoGroup(pageInfo.id, pageInfo.page - 1);
  };

  return {
    mvVideoData,
    getMvVideoData,
  };
});
