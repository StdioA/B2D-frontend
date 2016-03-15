import Vue from 'vue'
import Router from 'vue-router'
import App from './components/App'
import HelloView from './components/HelloView'
import LoginView from './components/LoginView'

/* eslint-disable no-new */
// new Vue({
//   el: 'body',
//   components: { View }
// });

Vue.use(Router)

var router = new Router()

router.map({
  '/hello': {
    component: HelloView
  },
  '/login': {
    component: LoginView
  }
})

router.redirect({
  '*': '/hello'
})

router.start(App, '#app')
