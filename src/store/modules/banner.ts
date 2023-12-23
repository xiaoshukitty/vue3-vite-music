import { defineStore } from "pinia";
import { ref } from "vue";
import { Banner } from "@/api/types/recommended";
import { useBanner } from "@/api/index";

export const useBannerStore = defineStore("BannerStore", () => {
  const banners = ref<Banner[]>([]);

  const getBanners = async () => {
    if (banners.value.length) return;
    banners.value = await useBanner();
  };

  return {
    banners,
    getBanners,
  };
});
