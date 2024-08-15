import { createApp } from "vue";
import App from "./App.vue";

//引入全局样式
import "@/styles/index.scss";
//引入路由
import router from "./router";
//引入 pinia 仓库
import pinia from "./store";
//暗黑模式需要样式
import "element-plus/theme-chalk/dark/css-vars.css";

// 引入Svg组件
import "virtual:svg-icons-register";

import SvgIcon from "@/components/SvgIcon/index.vue";

import * as ElementPlusIconsVue from "@element-plus/icons-vue";

//获取应用实例对象
const app = createApp(App);

//全局组件 icon 图标
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(key, component);
}

//组册路由
app.use(router);
// 注册 pinia 仓库
app.use(pinia);

app.component("SvgIcon", SvgIcon);

//将应用挂载到挂载点上
app.mount("#app");

// 动态创建 html 结果来展示页面加载 loading （要写在 app 挂在完毕后）
const appContainer = document.querySelector('#app');
const loadingMask = document.createElement('div');
loadingMask.id = 'loading-mask';
loadingMask.innerHTML = `
  <div class="loading-wrapper">
    <span class="loading-dot loading-dot-spin">
      <i></i>
      <i></i>
      <i></i>
      <i></i>
    </span>
  </div>
`
appContainer.appendChild(loadingMask);
