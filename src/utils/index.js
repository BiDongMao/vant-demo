/*
 * @Author: zhangmin
 * @Date: 2021-02-25 13:37:02
 * @LastEditors: zhangmin
 * @LastEditTime: 2021-10-26 16:19:42
 * @Description: 文件说明
 */
import Vue from 'vue'
import store from '@/store'
/**
 * 清除登录信息
 */
export function clearLoginInfo () {
    Vue.cookie.delete('token')
    store.commit('resetStore')
}

/**
 * 克隆数组
 */
 export function cloneObject(obj) {
    return JSON.parse(JSON.stringify(obj));
  }
