//创建用户相关的小仓库
import { defineStore } from "pinia";
//引入路由(常量路由) 将来组件就可以拿着用
import { constantRouter } from "@/router/routers";
import type { UserState } from "./types/type";
//创建用户小仓库
let useUserStore = defineStore("User", {
  //小仓库，存储数据地方
  state: (): UserState => {
    // : UserState 函数返回类型的意思
    return {
      menuRoutes: constantRouter, //仓库存储生成菜单需要数组(路由)
      skeletonLoading: false, //骨架屏
    };
  },
  //处理异步｜逻辑地方
  actions: {},
  //计算属性
  getters: {},
});
//对外暴露 获取小仓库 的方法
export default useUserStore;
