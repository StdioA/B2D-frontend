<template>
  <div class="ui main container items centered grid profile">
    <div class="row">
      <div class="eight wide column">
        <h1>Verify your order</h1>
        <div class="ui form">
          <div class="field">
            <label>Username</label>
            <p class="ui header" name="username">{{ user.username }}</p>
          </div>
          <div class="field">
            <!-- 后期替换成物品名 -->
            <label>Item ID</label>
            <input type="text" name="item" placeholder="Item" v-model="item_id">
            <label>Quantity</label>
            <input type="text" name="quantity" placeholder="Item" v-model="quantity">
          </div>
          <div class="fields">
            <div class="eight wide field">
              <label>Wallet</label>
              <input type="text" name="wallet" placeholder="Wallet">
            </div>
            <div class="four wide field">
              <div class="field">
                <label>Charge Amount</label>
                <input type="text" name="charge" placeholder="Amount">
              </div>
            </div>
            <div class="four wide field">
              <div class="ui button blue charge">
                Charge
              </div>
            </div>
          </div>
          <div class="field">
            <label>Address</label>
            <textarea name="address" cols="30" rows="4"></textarea>
          </div>
          <div class="field">
            <div class="ui massive buttons">
              <div class="ui green button">
                Ok I'm sure, BUY IT!
              </div>
              <div class="or"></div>
              <div class="ui orange button" @click="go_back">
                Cancel
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// import $ from 'jquery'

export default {
  data: function () {
    return {
      // id: this.id,
      quantity: 1
    }
  },
  vuex: {
    getters: {
      item_id: (state) => state.current_item,
      logged_in: (state) => state.user.logged_in,
      user: (state) => state.user
    }
  },
  methods: {
    go_back: function () {
      this.$route.router.go({ name: 'item', params: { id: this.item_id } })
    }
  },
  route: {
    data: function (transition) {
      if (this.item_id === undefined) {
        transition.redirect({ name: 'items' })
      } else if (this.logged_in === false) {
        transition.redirect({ name: 'login' })
      }
    }
    // canReuse: () => false
  }
}
</script>

<style lang='less'>
</style>
