import request from "@/utils/request";
import { Video, VideoGroup } from "@/api/types/mvApi";
export async function useVideoGroup(id?: number, offset?: number) {
  const { datas } = await request.get<{ datas: Video[] }>(
    id ? "video/group" : "video/timeline/all",
    {
      id: id,
      offset: offset,
    }
  );
  return datas;
}
export async function useVideoGroupList() {
  const { data } = await request.get<{ data: VideoGroup[] }>(
    "video/group/list"
  );
  return data;
}
