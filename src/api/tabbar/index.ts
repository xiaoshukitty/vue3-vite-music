import request from "@/utils/request";
import { SearchHotDetail, SearchSuggest } from "@/api/types/tabbar";

//搜索热门接口
export async function useSearchHotDetail() {
  const { data } = await request.get<{ data: SearchHotDetail[] }>(
    "search/hot/detail"
  );
  return data;
}

// 搜索歌单信息接口
export async function useSearchSuggest(keywords: string) {
  const { result } = await request.get<{ result: SearchSuggest }>(
    "search/suggest",
    { keywords: keywords }
  );
  return result;
}
