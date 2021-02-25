/*
 * @Author: zhangmin
 * @Date: 2021-01-31 16:40:05
 * @LastEditors: zhangmin
 * @LastEditTime: 2021-02-25 13:56:14
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
Vue.prototype.$http = httpRequest // ajax请求方法
Vue.use(VueCookie)

new Vue({
  router,
  store,
  el: '#app',
  render: h => h(App)
});
