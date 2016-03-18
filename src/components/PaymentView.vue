<template>
  <div class="ui main container items centered grid profile">
    <div class="row">
      <div class="eight wide column">
        <h1>Verify your order</h1>
        <div class="ui form">
          <div class="disabled field">
            <label>Username</label>
            <input type="text" name="username" placeholder="First Name">
          </div>
          <div class="field">
            <!-- 后期替换成物品名 -->
            <label>Item ID</label>
            <input type="text" name="item" placeholder="Item">
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
              <div class="ui orange button">
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
      id: this.id
    }
  },
  vuex: {
    getters: {
      id: function (state) {
        console.log('Get ID ' + state.current_item)
        return state.current_item
      }
    }
  },
  router: {
    canActivate: function (transition) {
      console.log('Call canActivate' + this.id)
      if (this.id === null) {
        console.log('订单不存在，跳转到items页面')
        transition.abort('订单不存在，跳转到items页面')
      } else {
        transition.next()
      }
    },

    activate: function (transition) {
      console.log('Call activate' + this.id)
      if (this.id === null) {
        console.log('订单不存在，跳转到items页面')
        transition.redirect({ name: 'items' })
      } else {
        transition.next()
      }
    },

    canReuse: () => false
  },
  ready: function () {
    console.log('Call ready ' + this.id)
    if (this.id === null) {
      console.log('Should redirect')
      this.$router.go({ name: 'items' })
    } else {
      console.log('Fill the form')
      document.querySelector('input[name=item]').value = this.id
    }
  }
}
</script>

<style lang='less'>
</style>
