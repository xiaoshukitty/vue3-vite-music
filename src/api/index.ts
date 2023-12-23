import request from "@/utils/request";
import {
  Banner,
  ExclusivePlaylist,
  RecommendedMusic,
  RecommendedMv,
} from "@/api/types/recommended";
import {
  ExclusivetList,
  RecommendationStation,
  OfficialList,
} from "@/api/types/musicHall";

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

/**音乐馆 */

//独家放送
export async function useExclusivetList(
  limit: number = 10,
  offset: number = 0
) {
  const { result } = await request.get<{ result: ExclusivetList[] }>(
    "personalized/privatecontent/list",
    {
      limit: limit,
      offset: offset,
    }
  );
  return result;
}
//推荐电台
export async function useRecommendationStation() {
  const { result } = await request.get<{ result: RecommendationStation[] }>(
    "personalized/djprogram"
  );
  return result;
}

// 音乐馆-排行
export async function useOfficialList() {
  const { list } = await request.get<{ list: OfficialList[] }>(
    "/toplist/detail"
  );
  return list;
}
