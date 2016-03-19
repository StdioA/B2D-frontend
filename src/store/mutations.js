
export default {
  LOGIN (state, user) {
    state.user = user
    state.user.logged_in = true
  },
  LOGOUT (state) {
    state.user = { logged_in: false }
  },
  SELECT_ITEM (state, id) {
    state.current_item = id
  },
  ADD_ITEM (state, items) {
    // state.items = state.items.comcat(items)
    state.items = items
  }
}
