<template>
  <div class="ui main container items centered grid profile">
    <div class="row">
      <div class="eight wide column">
        <h1>Verify your order</h1>
        <div class="ui form">
          <div class="field">
            <label>Username</label>
            <p class="ui confirmed input" name="username">{{ user.username }}</p>
          </div>
          <div class="field">
            <!-- 后期替换成物品名 -->
            <label>Item</label>
            <p name="item" class="ui confirmed input">{{ item.itemName }}</p>
          </div>
          <div class="fields">
            <div class="field">
              <label>Price</label>
              <div class="ui confirmed input">{{ item.itemPrice }}</div>
            </div>
            <div class="operator mutiply">*</div>
            <div class="field">
              <!-- <input type="text" name="item" placeholder="Item" v-model="item_id"> -->
              <label>Quantity</label>
              <input type="text" name="quantity" placeholder="Item" v-model="quantity">
            </div>
            <div class="operator equal">=</div>
            <div class="field">
              <label>Total cost</label>
              <div class="ui confirmed input">{{ total_cost }}</div>
            </div>
            <div class="operator euro">€</div>
          </div>
          <div class="fields">
            <div class="four wide field">
              <label>Wallet</label>
              <!-- <input type="text" name="wallet" placeholder="Wallet"> -->
              <div class="ui confirmed input">0</div>
            </div>
          </div>
            <!-- <div class="four wide field">
              <div class="field">
                <label>Charge Amount</label>
                <input type="text" name="charge" placeholder="Amount">
              </div>
            </div>
            <div class="four wide field">
              <div class="ui button blue charge">
                Charge
              </div>
            </div> -->
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
      item: {},
      quantity: 1
    }
  },
  vuex: {
    getters: {
      items: (state) => state.items,
      // item_id: (state) => state.current_item,
      current_order: (state) => state.current_order,
      logged_in: (state) => state.user.logged_in,
      user: (state) => state.user
    }
  },
  computed: {
    total_cost: function () {
      return this.item.itemPrice * this.quantity
    }
  },
  methods: {
    go_back: function () {
      this.$route.router.go({ name: 'item', params: { id: this.current_order.item_id } })
    }
  },
  route: {
    data: function (transition) {
      var item_id = this.current_order.itemId
      if (item_id === undefined) {
        transition.redirect({ name: 'items' })
      } else if (this.logged_in === false) {
        transition.redirect({ name: 'login' })
      } else {
        var item = this.items[item_id]
        if (item === undefined) {
          transition.redirect({ name: 'item', params: { id: item_id } })
        } else {
          transition.next({
            item: item,
            quantity: this.current_order.quantity
          })
        }
      }
    }
    // canReuse: () => false
  }
}
</script>

<style lang='less' scoped>
.ui.confirmed.input {
  margin-top: 0;
  /*height: 13px + 0.67861429em * 2;*/
  padding: 0.6em 1em;
  border: 1px solid rgba(34, 36, 38, 0.15);
  border-radius: 0.28571429rem;
}
.operator {
  /*margin-top: 29px;*/
  font-size: 3em;
  flex: 0 1 auto;
  pointer-events: none;

  &.mutiply {
    margin-top: 41px;
  }
  &.equal {
    margin-top: 30px;
  }
  &.euro {
    margin-top: 32px;
    font-size: 2em;
  }
}
</style>
