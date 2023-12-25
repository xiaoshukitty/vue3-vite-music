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
//处理热度数据
export function useNumberFormat(number: number): string | number {
  if (number > 100000000) {
    return Number((number / 100000000).toFixed(1)) + " 亿";
  }

  if (number > 10000000) {
    return Number((number / 10000000).toFixed(1)) + " 千万";
  }

  if (number > 10000) {
    return Number((number / 10000).toFixed(1)) + " 万";
  }

  return number;
}
