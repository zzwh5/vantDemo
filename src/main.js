import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
// 引入vant的组件
import "./until/components"
Vue.config.productionTip = false;
// 引入时间插件 一、 vueHashCalendar
// import vueHashCalendar from 'vue-hash-calendar'
// // 引入组件CSS样式
// import 'vue-hash-calendar/lib/vue-hash-calendar.css'
// // 注册组件库
// Vue.use(vueHashCalendar)

// 时间组件 二、 
import Calendar from 'vue-mobile-calendar'
 
Vue.use(Calendar)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
