/* 模块的应用状态 */

// 定义 mutation 名字
const types = {
  ADD: 'ADD',
  ADD2: 'ADD2'
}

// 定义初始化状态
const state = {
  count1: 100
}

// 定义获取状态快捷入口
const getters = {
  count1(state) {
    return state.count1
  }
}

// 定义 mutation
const mutations = {
  [types.ADD](state) {
    state.count1 ++
  },
  [types.ADD2](state, payload) {
    state.count1 += payload
  }
}

// 定义 action 封装异步逻辑以及聚合 mutation
const actions = {
  addAsync({commit, state}, payload) {
    setTimeout(() => {
      commit(types.ADD2, payload)
    }, 1000)
  }
}

export const vic = {
  state,
  mutations,
  actions,
  getters
}
