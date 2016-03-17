<template>
  <!-- 这两个v-if 不知道该怎么改了…最外层套上div所有的样式都会出错，不知道为什么 -->
  <div class="ui fixed inverted menu" v-if="$route.name!=='homepage'">
    <div class="ui container">
      <a v-link="{ name: 'homepage' }" class="header item">
        <img class="logo" src="../assets/logo.png">
        Buy2Die
      </a>
      <a v-link="{ name: 'homepage' }" class="item">Home</a>
      <div v-if="!user.logged_in" class="right menu">
        <a v-link="{ name: 'login' }" class="item">Log in</a>
      </div>
      <div class="ui simple right dropdown item" v-else>
        {{ user.username }} <i class="dropdown icon"></i>
        <div class="menu">
          <a class="item" v-link="{ path: '/logout' }">Log out</a>
          <!-- <div class="divider"></div> -->
          <!-- <div class="header">Header Item</div> -->
          <!-- <div class="item">
            <i class="dropdown icon"></i>
            Sub Menu
            <div class="menu">
              <a class="item" href="#">Link Item</a>
              <a class="item" href="#">Link Item</a>
            </div>
          </div> -->
          <!-- <a class="item" href="#">Link Item</a> -->
        </div>
      </div>
    </div>
  </div>

  <router-view
    keep-alive>
  </router-view>


  <div class="ui vertical footer segment" v-if="$route.name!=='homepage'">
    <div class="ui center aligned container">
      <img src="../assets/logos/vue.svg" class="ui centered mini image">
      <div class="ui horizontal small divided link list">
        <div class="item">Powered by <a href="//vuejs.org">Vue.js</a></div>
        <!-- <a class="item" href="#">Site Map</a>
        <a class="item" href="#">Contact Us</a>
        <a class="item" href="#">Terms and Conditions</a>
        <a class="item" href="#">Privacy Policy</a> -->
      </div>
    </div>
  </div>
</template>

<script>
import $ from 'jquery'
import store from '../store'

export default {
  name: 'App',
  store,
  data: function () {
    return {
      user: {}
    }
  },

  computed: {
    user () {
      return store.state.user
    }
  },

  route: {
    data ({to}) {
    }
  }
}

$(document).ready(function () {
  // fix menu when passed
  $('.masthead').visibility({
    once: false,
    onBottomPassed: function () {
      $('.fixed.menu').transition('fade in')
    },
    onBottomPassedReverse: function () {
      $('.fixed.menu').transition('fade out')
    }
  })

  // create sidebar and attach to menu open
  $('.ui.sidebar').sidebar('attach events', '.toc.item')
})
</script>

<style>

</style>
