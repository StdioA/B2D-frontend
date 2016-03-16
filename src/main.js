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
  '/login': {
    component: LoginView
  },
  '/': {
    component: HomePageView
  },
  '/user/:id'{
    component: UserView
  },
    '/item':{
    component: ItemView
  },
    '/register':{
      component: RegisterView
  },
    '/items':{
      component: ItemsView
  },
    '/payment':{
      component: PaymentView
    }

})

router.redirect({
  '*': '/hello'
})

router.start(App, '#app')
