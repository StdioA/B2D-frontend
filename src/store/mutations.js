
export default {
  LOGIN (state, user) {
    state.user = user
    state.user.logged_in = true
  },
  LOGOUT (state) {
    state.user = { logged_in: false }
  },
  SELECT_ITEM (state, id) {
    console.log('MUTATION: SELECT ITEM ' + id)
    state.current_item = id
  }
}
