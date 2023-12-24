import { shuffle } from "lodash";

//随机取数组10个
export const randomList = (list: any, num: number) => {
  return shuffle(list).slice(0, num);
};

//秒转化为时分秒
export const convertToHMS = (seconds: number) => {
  const s = Math.floor(seconds) % 60;
  seconds = Math.floor(seconds / 60);
  const i = seconds % 60;
  const ii = i < 10 ? `0${i}` : i;
  const ss = s < 10 ? `0${s}` : s;

  return ii + ":" + ss;
};
