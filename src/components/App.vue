<template>
  <div class="ui fixed inverted menu">
    <div class="ui container">
      <a href="#" class="header item">
        <img class="logo" src="../assets/logo.png">
        Project Name
      </a>
      <a v-link="{ path: '/hello' }" class="item">Home</a>
      <div class="ui simple right dropdown item">
        {{ user.username }} <i class="dropdown icon"></i>
        <div class="menu">
          <a class="item" v-link="{ path: '/login' }">Log in</a>
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
    class="view"
    keep-alive
    transition
    transition-mode="out-in">
  </router-view>

  <div class="ui vertical footer segment">
    <div class="ui center aligned container">
      <img src="../assets/logo.png" class="ui centered mini image">
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
</script>

<style>

</style>
