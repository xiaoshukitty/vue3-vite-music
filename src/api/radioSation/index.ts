import request from "@/utils/request";

// 获取精品歌单
export async function getTopPlayList({
  cat = "全部",
  limit = 10,
  before = "",
}) {
  return request.get(
    `/top/playlist/highquality?cat=${cat}&limit=${limit}&before=${before}`
  );
}
// 精品歌单标签列表
export async function getTopPlayListTags() {
  return request.get("/playlist/highquality/tags");
}
