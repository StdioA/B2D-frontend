<script>
export default {
  vuex: {
    actions: {
      logout: ({ dispatch }) => {
        dispatch('LOGOUT')
      }
    }
  },
  ready: function () {
    this.logout()
    this.$router.go({name: 'homepage'})
  }
}
</script>
