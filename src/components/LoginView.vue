<template>
<div class="ui middle aligned center aligned grid">
  <div class="column">
    <h2 class="ui teal image header">
      <img src="../assets/logo.png" class="image">
      <div class="content">
        Log-in to your account
      </div>
    </h2>
    <form class="ui large form">
      <div class="ui stacked segment">
        <div class="field">
          <div class="ui left icon input">
            <i class="user icon"></i>
            <input type="text" name="username" placeholder="Username">
          </div>
        </div>
        <div class="field">
          <div class="ui left icon input">
            <i class="lock icon"></i>
            <input type="password" name="password" placeholder="Password" @keyup.enter="try_login">
          </div>
        </div>
        <div class="ui fluid large teal submit button" @click="try_login">Login</div>
      </div>

      <div class="ui error message"></div>

    </form>

    <div class="ui message">
      New to us? <a href="#">Sign Up</a>
    </div>
  </div>
</div>
</template>

<script>
import $ from 'jquery'

export default {
  name: 'LoginView',
  vuex: {
    actions: {
      // 局部action, 由于这个action只在login页面中使用，所以不需要注册到全局
      login: ({ dispatch }, user) => {
        dispatch('LOGIN', user)
      }
    }
  },
  methods: {
    try_login: function (e) {
      var username = $('input[name=username]').val()
      // 用户登录认证逻辑
      if (username.trim()) {
        this.login({username: username})
      }
    }
  }
}
</script>

<style>
body > .grid {
  height: 100%;
}
.image {
  margin-top: -100px;
}
.column {
  max-width: 450px;
}
</style>
