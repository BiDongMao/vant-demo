/*
 * @Author: zhangmin
 * @Date: 2021-09-14 08:58:07
 * @LastEditors: zhangmin
 * @LastEditTime: 2021-09-14 08:58:41
 * @Description: 用户相关
 */
export default {
  namespaced: true,
  state: {
    userInfo: {}
  },
  mutations: {
    updateUserInfo (state, userInfo) {
      state.userInfo = userInfo
    }
  }
}
