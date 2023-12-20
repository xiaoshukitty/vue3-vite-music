import request from "@/utils/request";
import {
  Banner,
  ExclusivePlaylist,
  RecommendedMusic,
  RecommendedMv,
} from "./types";

//banner 接口
export async function useBanner() {
  const { banners } = await request.get<{ banners: Banner[] }>("/banner", {
    type: 1,
  });
  return banners;
}

//专属歌单接口
export async function useExclusivePlaylist() {
  const { result } = await request.get<{ result: ExclusivePlaylist[] }>(
    "/personalized"
  );
  return result;
}

//推荐新音乐接口
export async function useRecommendedMusic() {
  const { result } = await request.get<{ result: RecommendedMusic[] }>(
    "/personalized/newsong"
  );
  return result;
}

//获取推荐mv接口
export async function useRecommendedMv() {
  const { result } = await request.get<{ result: RecommendedMv[] }>(
    "personalized/mv"
  );
  return result;
}
