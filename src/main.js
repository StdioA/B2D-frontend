import Vue from 'vue'
import Router from 'vue-router'
import Vuex from 'vuex'
import App from './components/App'
import HelloView from './components/HelloView'
import LoginView from './components/LoginView'
import HomePageView from './components/HomePageView'

/* eslint-disable no-new */
// new Vue({
//   el: 'body',
//   components: { View }
// });

Vue.config.debug = true
Vue.use(Router)
Vue.use(Vuex)

var router = new Router()

router.map({
  '/hello': {
    component: HelloView
  },
  '/login': {
    component: LoginView
  },
  '/': {
    component: HomePageView
  }
})

router.redirect({
  '*': '/hello'
})

router.start(App, '#app')
