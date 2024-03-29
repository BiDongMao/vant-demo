/*
 * @Author: zhangmin
 * @Date: 2021-05-19 08:38:33
 * @LastEditors: zhangmin
 * @LastEditTime: 2021-10-26 16:16:35
 * @Description: 接口地址配置
 */

let baseUrl = "https://staff.ruiztech.cn:4443/ruiz/"; //默认的url，可以没有

switch (process.env.NODE_ENV) {
  case "development":
    baseUrl = "https://staff.ruiztech.cn:4443/ruiz/"; //本地的请求url
    break;
  case "test": // 注意这里的名字要和设置的环境名字对应起来
    baseUrl = "https://staff.ruiztech.cn:4443/ruiz/"; //测试环境中的url
    break;
  case "production":
    baseUrl = "https://staff.ruiztech.cn:4443/ruiz/"; //生产环境url
    break;
}

export const URL = { baseUrl };
