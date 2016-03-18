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
      }
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
      var username = $('input[name=username]').val()
      var password = $('input[name=password]').val()
      // 用户登录认证逻辑
      if (username.trim() && username === password) {
        this.login({username: username})
        this.$router.go({name: 'items'})
      } else {
        this.login_status.failed = true
        this.login_status.message = 'Incorrect username or password.'
      }
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
