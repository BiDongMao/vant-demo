/*
 * @Author: zhangmin
 * @Date: 2021-01-31 16:40:05
 * @LastEditors: zhangmin
 * @LastEditTime: 2021-09-14 09:10:49
 * @Description: 文件说明
 */
const path = require("path");
const themePath = path.resolve(__dirname, "src/assets/style/variables.less");
module.exports = {
  outputDir: 'dist',
  publicPath: process.env.NODE_ENV === 'production' ? '/' : '/',
  devServer: {
      proxy: {
          '/api': {
              target: 'https://w.ruiztech.cn/bz/',
              changeOrigin: true,// 允许跨域
              ws: true,
              pathRewrite: {
                  '^/api': ''
              }
          }
      }
  },
  css: {
    loaderOptions: {
      less: {
        modifyVars: {
          hack: `true; @import "${themePath}";`,
        },
      },
    },
  }
};
