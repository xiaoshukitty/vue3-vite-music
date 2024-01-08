import request from "@/utils/request";
import { Video } from "@/api/types/mvApi";
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
