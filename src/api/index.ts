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
import { AlbumArtistDetail } from "@/api/types/artistDetail";
//倒入详情接口
import { ArtistDetail } from "@/api/types/details";
//倒入歌手专辑接口类型
import { Album } from "./types/album";
// 导入歌手详情借口
import { Introduce } from "./types/introduce";
//导入歌手视频接口
import { Mv } from "./types/songMv";
// 导入搜索歌单接口类型
import { PlayListDetail } from "./types/playlist";

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

//获取歌手专辑
export async function useArtistAlbum(
  id: number,
  limit: number = 10,
  offset: number = 0
) {
  return await request.get<{ hotAlbums: AlbumArtistDetail[] }>("artist/album", {
    id: id,
    limit: limit,
    offset: offset,
  });
}

// 歌手视频
export async function useArtistMv(
  id: number,
  limit: number = 10,
  offset: number = 0
) {
  return await request.get<{ mvs: Mv[] }>("artist/mv", {
    id: id,
    limit: limit,
    offset: offset,
  });
}

//歌手详情
export async function useIntroduce(id: number) {
  return await request.get<Introduce>("artist/desc", { id: id });
}

// 歌手专辑接口
export async function useAlbum(id: number) {
  const { album, songs } = await request.get<{ album: Album; songs: Song[] }>(
    "album",
    { id: id }
  );

  return { album, songs };
}

// 搜索歌单
export async function usePlayListDetail(id: number, s: number = 8) {
  const { playlist } = await request.get<{ playlist: PlayListDetail }>(
    "/playlist/detail",
    { id: id, s: s }
  );
  return playlist;
}

export async function usePlayListTrackAll(id: number) {
  const { songs } = await request.get<{ songs: Song[] }>("playlist/track/all", {
    id: id,
  });
  return songs;
}

// 歌单评论
export async function usePlayReiewListAll(params: any) {
  return await request.get<{ code: number; data: any }>("comment/playlist", {
    ...params,
  });
}
