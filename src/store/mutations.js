
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
  ALL_ITEMS_LOADED (state, items) {
    state.all_items_loaded = true
  },
  ADD_ITEMS (state, items) {
    for (let item of items) {
      state.items[item.itemId] = item
    }
  },
  ADD_ITEM (state, item) {
    state.items[item.itemId] = item
  }
}
