//歌手专辑类型
import { Artist } from "@/api/types/album";
export interface AlbumArtistDetail {
  songs: any[];
  paid: boolean;
  onSale: boolean;
  mark: number;
  blurPicUrl: string;
  companyId: number;
  alias: string[];
  artists: Artist[];
  copyrightId: number;
  picId: number;
  artist: Artist;
  publishTime: number;
  company: string;
  briefDesc: string;
  picUrl: string;
  commentThreadId: string;
  pic: number;
  tags: string;
  description: string;
  status: number;
  subType: string;
  name: string;
  id: number;
  type: string;
  size: number;
  picId_str: string;
}
