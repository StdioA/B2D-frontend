
export default {
  LOGIN (state, user) {
    state.user = user
    state.user.logged_in = true
  },
  LOGOUT (state) {
    state.user = { logged_in: false }
  },
  MAKE_ORDER (state, order) {
    console.log('make_order: ' + JSON.stringify(order))
    state.current_order = order
  },
  // SELECT_ITEM (state, id) {
  //   state.current_item = id
  // },
  ADD_ITEMS (state, items) {
    for (let item of items) {
      state.items[item.id] = item
    }
  },
  ADD_ITEM (state, item) {
    state.items[item.id] = item
  }
}
