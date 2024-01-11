import request from "@/utils/request";
import { Lyric } from "@/api/types/lyric";

//获取歌词接口
export async function useLyric(id: number) {
  const data = await request.get<{ data: Lyric }>("lyric", {
    id: id,
  });
  return data;
}
