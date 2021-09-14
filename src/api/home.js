/*
 * @Author: zhangmin
 * @Date: 2021-05-06 10:34:15
 * @LastEditors: zhangmin
 * @LastEditTime: 2021-09-14 09:14:21
 * @Description: 首页相关
 */

import http from "@/utils/httpRequest";
import { Toast } from "vant";

/**
 * 获取统计数据
 */
export function getStatistics() {
  return new Promise((resolve, reject) => {
    http({
      url: http.adornUrl("/app/data/statistics"),
      method: "post",
      data: http.adornData({}),
    })
      .then(({ data }) => {
        if (data && data.code === 0) {
          resolve(data.data);
        } else {
          Toast(data.message);
          reject(data);
        }
      })
      .catch((err) => {
        reject(err);
      });
  });
}

