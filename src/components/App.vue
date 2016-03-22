<template>
  <!-- 这两个v-if 不知道该怎么改了…最外层套上div所有的样式都会出错，不知道为什么 -->
  <div class="ui fixed inverted menu" v-if="$route.name!=='homepage'">
    <div class="ui container">
      <a v-link="{ name: 'homepage' }" class="header item">
        <img class="logo" src="../assets/logo.png">
        Buy2Die
      </a>
      <a v-link="{ name: 'homepage' }" class="item">Home</a>
      <a v-link="{ name: 'items' }" class="item">Item List</a>
      <div v-if="!user.logged_in" class="right menu">
        <a v-link="{ name: 'login' }" class="item">Log in</a>
        <a v-link="{ name: 'register' }" class="item">Sign up</a>
      </div>
      <div class="ui simple right dropdown item" v-else>
        {{ user.username }} <i class="dropdown icon"></i>
        <div class="menu">
          <a class="item" v-link="{ name: 'user' }">Profile</a>
          <a class="item" v-link="{ name: 'logout' }">Log out</a>
        </div>
      </div>
    </div>
  </div>

  <router-view
    keep-alive
    transition="fade"
    transition-mode="out-in">
  </router-view>

  <div class="ui vertical footer segment" v-if="$route.name!=='homepage'">
    <div class="ui center aligned container">
      <img src="../assets/logos/vue.svg" class="ui centered mini image">
      <div class="ui horizontal small divided link list">
        <div class="item">Powered by <a href="//vuejs.org">Vue.js</a></div>
      </div>
    </div>
  </div>
</template>

<script>
import $ from 'jquery'
import store from '../store'

import jQuery from 'jquery'
window.jQuery = jQuery
require('../semantic/dist/semantic.js')

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
  $('.special.cards .image').dimmer({
    on: 'hover'
  })
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

<style lang="less">
@import "../semantic/src/semantic";

@background-color: #eee;

@keyframes fadeIn {
    0% {
        opacity: 0;
    }
    100% {
        opacity: 1;
    }
}

@keyframes fadeOut{
    0% {
        opacity: 1;
    }
    100% {
        opacity: 0;
    }
}

.fade {
  &-enter {
    animation: fadeIn 0.3s;
  }
  &-leave {
    animation: fadeOut 0.3s;
  }
}


body {
  background: @background-color;

  &.pushable {
    background: @background-color !important;
  }
}

.ui.main.container {
  min-height: 73%;
}

.ui.footer.segment {
  padding: 2em 0em;
}
.ui.loading.segment:before {
  background: fadeout(@background-color, 20%);
}
</style>
