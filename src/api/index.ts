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
import { SongUrl, Song } from "@/api/types/index";
//倒入详情接口
import { ArtistDetail } from "@/api/types/details";
//倒入歌手专辑接口类型
import { Album } from "./types/album";

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

//获取播放音乐url
export async function useSongUrl(id: number) {
  const { data } = await request.get<{ data: SongUrl[] }>("/song/url", {
    id: id,
  });
  return data[0];
}
// 音乐播放
export async function useDetail(id: number) {
  const { songs } = await request.get<{ songs: Song[] }>("/song/detail", {
    ids: id,
  });
  return songs[0];
}

//歌手详情信息列表
export async function useArtistDetail(id: number) {
  const { data } = await request.get<{ data: ArtistDetail }>("artist/detail", {
    id: id,
  });
  return data;
}

//详情获取列表数据接口
export async function useArtistSongs(
  id: number,
  order: string = "time",
  limit: number = 10,
  offset: number = 0
) {
  return await request.get<{ songs: Song[] }>("artist/songs", {
    id: id,
    order: order,
    limit: limit,
    offset: offset,
  });
}

// 歌手专辑接口
export async function useAlbum(id: number) {
  const { album, songs } = await request.get<{ album: Album; songs: Song[] }>(
    "album",
    { id: id }
  );

  return { album, songs };
}
