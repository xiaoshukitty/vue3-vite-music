// banner 图接口类型
export interface Banner {
    pic: string;
    targetId: number;
    targetType: number;
    typeTitle: string;
    bannerId: number;
  }
  // 专属歌单接口类型
  export interface ExclusivePlaylist {
    id: number;
    type: number;
    name: string;
    copywriter: string;
    picUrl: string;
    canDislike: boolean;
    trackNumberUpdateTime: number;
    playCount: number;
    trackCount: number;
    highQuality: boolean;
    alg: string;
  }
  //推荐新音乐接口类型
  export interface RecommendedMusic {
    id: number;
    type: number;
    name: string;
    picUrl: string;
    canDislike: boolean;
    song: SongType;
    alg: string;
  }
  interface SongType {
    artists: {
      id: number;
      name: string;
    }[];
  }
  
  //获取推荐mv接口类型
  export interface RecommendedMv {
    id: number;
    type: number;
    name: string;
    copywriter: string;
    picUrl: string;
    canDislike: boolean;
    trackNumberUpdateTime?: any;
    duration: number;
    playCount: number;
    subed: boolean;
    artists: {
      id: number;
      name: string;
    }[];
    artistName: string;
    artistId: number;
    alg: string;
  }
  