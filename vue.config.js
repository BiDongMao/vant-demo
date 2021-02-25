/*
 * @Author: zhangmin
 * @Date: 2021-01-31 16:40:05
 * @LastEditors: zhangmin
 * @LastEditTime: 2021-02-25 14:16:38
 * @Description: 文件说明
 */
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
          'font-size-sm': '13px',
          'font-size-md': '15px',
          'font-size-lg': '17px',
          'goods-action-button-danger-color': '#7232dd',
          'goods-action-button-warning-color': '#3eaf7c'
        }
      }
    }
  }
};
