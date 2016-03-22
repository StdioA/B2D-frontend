import Vue from 'vue'
import Router from 'vue-router'
import Vuex from 'vuex'

import App from './components/App'
// import the views
import HomePageView from './components/HomePageView'
import LoginView from './components/LoginView'
import LogoutView from './components/LogoutView'
import RegisterView from './components/RegisterView'
import UserView from './components/UserView'
import ItemView from './components/ItemView'
import ItemsView from './components/ItemsView'
import PaymentView from './components/PaymentView'

// Vue.config.debug = true
Vue.use(Router)
Vue.use(Vuex)

var router = new Router()

router.map({
  '/': {
    name: 'homepage',
    component: HomePageView
  },
  '/home': {
    name: 'homepage',
    component: HomePageView
  },
  '/login': {
    name: 'login',
    component: LoginView
  },
  '/logout': {
    name: 'logout',
    component: LogoutView
  },
  '/register': {
    name: 'register',
    component: RegisterView
  },
  '/user': {
    name: 'user',
    component: UserView
  },
  '/item/:id': {
    name: 'item',
    component: ItemView
  },
  '/items': {
    name: 'items',
    component: ItemsView
  },
  '/payment': {
    name: 'payment',
    component: PaymentView
  }
})

router.redirect({
  '*': '/home'
})

router.start(App, '[app]')
