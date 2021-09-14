/*
 * @Author: zhangmin
 * @Date: 2021-05-19 08:38:33
 * @LastEditors: zhangmin
 * @LastEditTime: 2021-09-14 08:56:38
 * @Description: 接口地址配置
 */

let baseUrl = "https://dev-ipc.inque365.com:8087"; //默认的url，可以没有

switch (process.env.NODE_ENV) {
  case "development":
    baseUrl = "http://116.62.156.235:8087"; //本地的请求url
    break;
  case "test": // 注意这里的名字要和设置的环境名字对应起来
    baseUrl = "https://103.233.83.92:8087"; //测试环境中的url

    break;
  case "production":
    baseUrl = "https://ipc-us.org:8087"; //生产环境url
    break;
}

export const URL = { baseUrl };
