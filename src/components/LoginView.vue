<template>
<div class="ui middle aligned center aligned grid login">
  <div class="column">
    <h2 class="ui teal image header">
      <img src="../assets/logo.png" class="image">
      <div class="content">
        Log-in to Buy2Die
      </div>
    </h2>
    <form class="ui large form" :class="{ 'error': login_status.failed }">
      <div class="ui stacked segment">
        <div class="field">
          <div class="ui left icon input">
            <i class="user icon"></i>
            <input type="text" name="username" placeholder="Username" v-model="username" lazy>
          </div>
        </div>
        <div class="field">
          <div class="ui left icon input">
            <i class="lock icon"></i>
            <input type="password" name="password" placeholder="Password" v-model="password" lazy @keyup.enter="try_login">
          </div>
        </div>
        <div class="ui fluid large teal submit button" :class="{'loading':trying}" @click="try_login">Login</div>
      </div>

      <div class="ui error message" v-show="login_status.failed" transition='fade'>
        {{ login_status.message }}
      </div>

    </form>

    <div class="ui message">
      New to us? <a v-link="{ name: 'register' }">Sign Up</a>
    </div>
  </div>
</div>
</template>

<script>
import $ from 'jquery'

export default {
  name: 'LoginView',
  data: () => {
    return {
      login_status: {
        failed: false,
        message: ''
      },
      trying: false,
      username: '',
      password: ''
    }
  },
  vuex: {
    getters: {
      // 获取用户登录信息
      logged_in: function (state) {
        return state.user.logged_in
      }
    },
    actions: {
      // 局部action, 由于这个action只在login页面中使用，所以不需要注册到全局
      login: ({ dispatch }, user) => {
        dispatch('LOGIN', user)
      }
    }
  },
  route: {
    data: function (transition) {
      // 如果已登录，则跳转至items页面
      if (this.logged_in) {
        transition.redirect({ name: 'items' })
      } else {
        transition.next()
      }
    }
  },
  methods: {
    try_login: function (e) {
      var username = this.username
      var password = this.password
      var app = this

      // 用户登录认证逻辑
      app.trying = true
      setTimeout(function () {
        app.trying = false
        $.post('http://107.182.176.96:2333/login', {
          username: username,
          password: password},
          function (status) {
            if (status.success) {
              app.login({username: username})
              app.$router.go({name: 'items'})
            } else {
              app.login_status.failed = true
              app.login_status.message = 'Incorrect username or password.'
            }
          }, 'JSON')
      }, 1000)
    }
  }
}
</script>

<style lang="less">
.login {
  background: #eee;

  &.grid {
    margin-top: 15px;
    height: 80%;
  }
  .image {
    // margin-top: -100px;
  }
  .column {
    max-width: 450px;
  }
}
</style>
