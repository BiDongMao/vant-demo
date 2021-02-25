export default {
  namespaced: true,
  state: {
    // 状态
    returnStatusOptions: [
      {id: 1, name: '待审批'},
      {id: 2, name: '审批拒绝'},
      {id: 3, name: '进行中'},
      {id: 4, name: '已完成'}
    ]
  },
  mutations: {
    updateReturnStatusOptions (state, returnStatusOptions) {
      state.returnStatusOptions = returnStatusOptions
    }
  }
}
