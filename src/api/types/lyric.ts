export interface Lyric {
  klyric: LyricType;
  qfy: boolean;
  sfy: boolean;
  sgc: boolean;
  lrc: LyricType;
  romalrc: LyricType;
  tlyric: LyricType;
  code:number;
}
interface LyricType {
  lyric: string;
  version: number;
}
