/*
 * @Author: zhangmin
 * @Date: 2021-02-25 13:32:24
 * @LastEditors: zhangmin
 * @LastEditTime: 2021-09-14 08:57:28
 * @Description: 文件说明
 */

import Vue from 'vue'
import axios from 'axios'
import { router } from '@/router.js';
import qs from 'qs'
import merge from 'lodash/merge'
import {clearLoginInfo} from '@/utils'
import { URL } from "../../config/index.js";
let { baseUrl } = URL;


const http = axios.create({
  timeout: 1000 * 60,
  withCredentials: true,
  headers: {
    'Content-Type': 'application/json; charset=utf-8'
  }
})

/**
 * 请求拦截
 */
http.interceptors.request.use(config => {
  config.headers['token'] = Vue.cookie.get('token') // 请求头带上token
  config.headers['currCompanyId'] = Vue.cookie.get('currCompanyId') // 请求头带上当前账套id

  // console.log(config)
  return config
}, error => {
  return Promise.reject(error)
})

/**
 * 响应拦截
 */
http.interceptors.response.use(response => {
  if (response.data && response.data.code === 401) { // 401, token失效
    clearLoginInfo()
    router.push({ name: 'login' })
    Vue.cookie.set('token', '') // token清空
    Vue.prototype.$toast('请先登录')
    return response
  } 
  return response
}, error => {
  console.error('error', error)
  return Promise.reject(error)
})

/**
 * 请求地址处理
 * @param {*} actionName action方法名称
 */
http.adornUrl = (actionName) => {
  return baseUrl  + actionName
}

/**
 * get请求参数处理
 * @param {*} params 参数对象
 * @param {*} openDefultParams 是否开启默认参数?
 */
http.adornParams = (params = {}, openDefultParams = true) => {
  var defaults = {
    't': new Date().getTime()
  }
  return openDefultParams ? merge(defaults, params) : params
}

/**
 * post请求数据处理
 * @param {*} data 数据对象
 * @param {*} openDefultdata 是否开启默认数据?
 * @param {*} contentType 数据格式
 *  json: 'application/json; charset=utf-8'
 *  form: 'application/x-www-form-urlencoded; charset=utf-8'
 */
http.adornData = (data = {}, openDefultdata = true, contentType = 'json') => {
  var defaults = {
    't': new Date().getTime()
  }
  data = openDefultdata ? merge(defaults, data) : data
  return contentType === 'json' ? JSON.stringify(data) : qs.stringify(data)
}

export default http

