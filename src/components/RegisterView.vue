<template>
<div class="ui middle aligned center aligned grid login">
  <div class="column">
    <h2 class="ui teal image header">
      <img src="../assets/logo.png" class="image">
      <div class="content">
        Sign up to Buy2Die
      </div>
    </h2>
    <form class="ui large form" :class="{ 'error': !password_match || !password_length || !password_complex || !username_legal}">
      <div class="ui stacked segment">
        <div class="field">
          <div class="ui left icon input">
            <i class="user icon"></i>
            <input type="text" name="username" v-model="username" placeholder="Username">
          </div>
        </div>
        <div class="field">
          <div class="ui left icon input">
            <i class="lock icon"></i>
            <input type="password" name="password" v-model="password" placeholder="Password">
          </div>
        </div>
        <div class="field">
          <div class="ui left icon input">
            <i class="lock icon"></i>
            <input type="password" name="repeat_password" v-model="password_r" placeholder="Repeat Password">
          </div>
        </div>
        <div class="ui fluid large teal submit button" @click="try_login">Register</div>
      </div>
      <div class="ui error message" v-show="!password_length || !password_complex || !password_match || !username_legal">
        <ul class="list">
          <li v-show="!username_legal">Username contain invalid characters.</li>
          <li v-show="!password_length">Password must be at least 6 characters.</li>
          <li v-show="!password_complex">Sorry, your password is too weak. Use a combination of numeric and characters to increase password strength.</li>
          <li v-show="!password_match">Please enter the same password as above.</li>
          </ul>
      </div>
    </form>
  </div>
</div>
</template>

<script>
// import $ from 'jquery'

export default {
  name: 'RegisterView',
  data: () => {
    return {
      password: '',
      password_r: '',
      username: ''
    }
  },
  vuex: {
    getters: {
      // 获取用户登录信息
      logged_in: function (state) {
        return state.user.logged_in
      }
    }
  },
  computed: {
    password_match: function () {
      return !this.password_r || (this.password === this.password_r)
    },
    password_legal: function () {
      return this.password_length && this.password_complex
    },
    password_length: function () {
      return (this.password.length === 0) || (this.password.length > 5)
    },
    password_complex: function () {
      var patrn = /^(?:\d+|[a-zA-Z]+|[!@#$%^&*]+)$/
      if (!patrn.exec(this.password)) return true
      else return false
    },
    username_legal: function () {
      var patrn = /^([a-zA-Z0-9]|[._]){4,19}$/
      if (!patrn.exec(this.username.toString)) return true
      else return false
    }
  },
  methods: {
    // try_login: function (e) {
    //   var username = $('input[name=username]').val()
    //   var password = $('input[name=password]').val()
    //   // 用户登录认证逻辑
    //   if (username.trim() && username === password) {
    //     this.login({username: username})
    //   } else {
    //     this.login_status.failed = true
    //     this.login_status.message = 'Incorrect username or password.'
    //   }
    // }
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
  }
}
</script>

<style lang="less">

</style>
