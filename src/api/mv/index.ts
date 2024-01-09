import request from "@/utils/request";
import { MvUrl } from "@/api/types/mv";

//获取 mv 播放 url
export async function useMvUrl(id: number) {
  const { data } = await request.get<{ data: MvUrl }>("mv/url", { id: id });
  return data;
}
