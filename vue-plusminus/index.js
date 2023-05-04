import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    counter: 0
  },
  getters: {
    counterDouble (state) {
      return state.counter * 2
  }},
  mutations: {
    INCREASE_COUNT(state) {
      state.counter = state.counter + 1
    },
    DECREASE_COUNT(state) {
      state.counter -= 1

    }
  },
  actions: {
    increaseCount(context) {
      // 비동기 동작, state를 바꾸기 전 준비단계, count필요없음
      context.commit('INCREASE_COUNT')
    },
    decreaseCount(context) {
      context.commit('DECREASE_COUNT')
    }
  },
  modules: {
  }
})
 