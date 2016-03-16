import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    user: {
      username: 'User'
    }
  },
  actions: {
    login: (store, user) => {
      // 异步请求登录逻辑
      if (user !== '') {
        store.dispatch('LOGIN', user)
      }
    }
  },
  mutations: {
    LOGIN (state, user) {
      state.user = user
    }
  }
})

export default store
