import Vue from 'vue'
import Vuex from 'vuex'
import createLogger from 'vuex/dist/logger'

import { vic } from './vic'

Vue.use(Vuex)

const rootStore = {
  state: {
    counter: 0
  },
  mutations: {
    increment(state) {
      state.counter ++
    }
  },
  getters: {
    counter(state) {
      return state.counter
    }
  }
}

const store = new Vuex.Store({
  ...rootStore,
  modules: {
    vic: {
      namespaced: true,
      ...vic
    }
  },
  // 开启状态改变日志，开发模式下使用
  plugins: [createLogger()]
})

export default store
