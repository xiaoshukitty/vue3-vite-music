import { shuffle } from "lodash";

//随机取数组10个
export const randomList = (list: any, num: number) => {
  return shuffle(list).slice(0, num);
};
