// 小仓库：关于 layout 组件相关配置的仓库
// 在 scr/layout/tabbar/breadcrumb/index 里面
import { defineStore } from "pinia";
//引入操作本地存储工具方法
import { GET_STORAGE } from "@/utils/storage";
let useLayOutSettingStore = defineStore("SettingStore", {
  state: () => {
    return {
      fold: false, //用户控制菜单折叠还是收起控制
      refsh: false, //控制刷新效果
      theme: GET_STORAGE('THEME'),
    };
  },
});

export default useLayOutSettingStore;
