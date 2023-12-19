import { createApp } from "vue";
import App from "./App.vue";

//引入全局样式
import '@/styles/index.scss'
//引入路由
import router from "./router";
//引入 pinia 仓库
import pinia from './store'

//获取应用实例对象
const app = createApp(App);

//组册路由
app.use(router);
// 注册 pinia 仓库
app.use(pinia)

//将应用挂载到挂载点上
app.mount("#app");
