/*
 * @Author: zhangmin
 * @Date: 2021-01-31 16:40:05
 * @LastEditors: zhangmin
 * @LastEditTime: 2021-10-26 16:20:06
 * @Description: 文件说明
 */
import Vue from 'vue';
import App from './App';
import VueCookie from 'vue-cookie'
import { router } from './router';
import store from '@/store'
import '@/assets/style/index.less'
import '@/vant-ui';
import httpRequest from '@/utils/httpRequest' 
import { cloneObject} from "@/utils/index.js";
Vue.use(VueCookie)

Vue.prototype.$http = httpRequest // ajax请求方法
Vue.prototype.cloneObject = cloneObject; // 深克隆
import Loading from '@/components/loading';//加载框
Vue.use(Loading);

new Vue({
  router,
  store,
  el: '#app',
  render: h => h(App)
});
