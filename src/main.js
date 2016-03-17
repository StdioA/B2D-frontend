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

Vue.config.debug = true
Vue.use(Router)
Vue.use(Vuex)

var router = new Router()

router.map({
  '/': {
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
<<<<<<< HEAD
  '/user'{
    component: UserView
  },
    '/item/:id':{
=======
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
>>>>>>> cd5ea84360eea4efdf177d6e9c49e86dd8456cbb
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
  '*': '/hello'
})

router.start(App, '[app]')
