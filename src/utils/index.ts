import { shuffle } from "lodash";

/**
 * 随机取数组
 * @param list 要处理的数组
 * @param num 要分隔的个数
 * @returns
 */
export const randomList = (list: any, num: number) => {
  return shuffle(list).slice(0, num);
};

/**
 * 秒转化为时分秒
 * @param seconds 秒数
 * @returns
 */
export const convertToHMS = (seconds: number) => {
  const s = Math.floor(seconds) % 60;
  seconds = Math.floor(seconds / 60);
  const i = seconds % 60;
  const ii = i < 10 ? `0${i}` : i;
  const ss = s < 10 ? `0${s}` : s;

  return ii + ":" + ss;
};

/**
 * 处理热度数据
 * @param number 传递过来要处理的数据
 * @returns
 */
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

/**
 * 时间戳转化
 * @param time  传递的时间戳
 * @param type  1-年月日  2-年月日时分秒 或者其他的分隔符
 * @returns
 */
export function useTimestamp(time: number, type?: number): string {
  var date = new Date(time);
  var Y = date.getFullYear() + "-";
  var M =
    (date.getMonth() + 1 < 10
      ? "0" + (date.getMonth() + 1)
      : date.getMonth() + 1) + "-";
  var D = (date.getDate() < 10 ? "0" + date.getDate() : date.getDate()) + " ";
  var h =
    (date.getHours() < 10 ? "0" + date.getHours() : date.getHours()) + ":";
  var m = date.getMinutes() < 10 ? "0" + date.getMinutes() : date.getMinutes();
  var s = date.getSeconds() < 10 ? "0" + date.getSeconds() : date.getSeconds();
  console.log(Y + M + D + h + m + s, type);

  return Y + M + D;
}

/**
 * 时间戳转化
 * @param time  传递的时间戳
 * @param type  YYYY-MM-DD hh:mm:ss
 * @returns
 */
export function useTimestampType(time: number, type?: string): string {
  var date = new Date(time);
  var Y = date.getFullYear() + "-";
  var M =
    (date.getMonth() + 1 < 10
      ? "0" + (date.getMonth() + 1)
      : date.getMonth() + 1) + "-";
  var D = (date.getDate() < 10 ? "0" + date.getDate() : date.getDate()) + " ";
  var h =
    (date.getHours() < 10 ? "0" + date.getHours() : date.getHours()) + ":";
  var m = date.getMinutes() < 10 ? "0" + date.getMinutes() : date.getMinutes();
  var s = date.getSeconds() < 10 ? "0" + date.getSeconds() : date.getSeconds();

  if (type === "YYYY-MM-DD hh:mm:ss") {
    return Y + M + D + h + m + s;
  }
}
