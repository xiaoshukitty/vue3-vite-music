/**音乐馆 */
//独家放送接口类型
export interface ExclusivetList {
  id: number;
  url: string;
  picUrl: string;
  sPicUrl: string;
  type: number;
  copywriter: string;
  name: string;
  time: number;
}

//推荐电台
export interface RecommendationStation {
  id: number;
  type: number;
  name: string;
  copywriter: string;
  picUrl: string;
  canDislike: boolean;
  trackNumberUpdateTime?: any;
}

// 音乐馆-排行
export interface OfficialList {
  subscribers: any[];
  subscribed?: any;
  creator?: any;
  artists?: any;
  tracks: TopListDetailTracks[];
  updateFrequency: string;
  backgroundCoverId: number;
  backgroundCoverUrl?: any;
  titleImage: number;
  titleImageUrl?: any;
  englishTitle?: any;
  opRecommend: boolean;
  recommendInfo?: any;
  subscribedCount: number;
  cloudTrackCount: number;
  userId: number;
  highQuality: boolean;
  createTime: number;
  specialType: number;
  coverImgId: number;
  newImported: boolean;
  anonimous: boolean;
  updateTime: number;
  trackCount: number;
  coverImgUrl: string;
  commentThreadId: string;
  trackUpdateTime: number;
  totalDuration: number;
  privacy: number;
  playCount: number;
  trackNumberUpdateTime: number;
  adType: number;
  description: string;
  ordered: boolean;
  tags: any[];
  status: number;
  name: string;
  id: number;
  coverImgId_str: string;
  ToplistType: string;
}

export interface TopListDetailTracks {
  first: string;
  second: string;
}
