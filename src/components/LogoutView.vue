<template>
  <div class="ui main text container">
    <h1>logout</h1>
  </div>
</template>

<script>
export default {
  vuex: {
    actions: {
      logout: ({ dispatch }) => {
        dispatch('LOGOUT')
      }
    }
  },
  // 改！
  methods: {
    do_logout: function () {
      this.logout()
      console.log('logout do_logout')
      this.$router.go({name: 'homepage'})
    }
  },
  compiled: function () {
    this.logout()
    console.log('logout compiled')
    this.$router.go({name: 'homepage'})
  },
  beforeCompile: function () {
    this.logout()
    console.log('logout beforeCompile')
    this.$router.go({name: 'homepage'})
  }
}

</script>
