<template>
  <div class="ui main container items centered grid">
    <div class="row">
      <div class="ten wide column">
        <h1>User Profile</h1>
        <div class="ui vertical segment" :class="{ 'loading': $loadingRouteData }">
          <div class="ui form">
            <div class="field">
              <label>Username</label>
              <p name="username" class="ui header">{{user.username}}</p>
            </div>
            <div class="fields">
              <div class="eight wide field">
                <label>Wallet</label>
                <p type="text" name="wallet" class="ui header blue" placeholder="Wallet">{{balance}}<span><i class="euro icon"></i></span></p>
              </div>
              <div class="six wide field">
                <div class="field">
                  <label>Charge Amount</label>
                  <div class="ui right labeled input">
                    <input type="text" name="charge" placeholder="Amount" v-model="chargeAmount">
                    <div class="ui basic label">€</div>
                  </div>
                </div>
              </div>
              <div class="four wide field">
                <div class="ui button blue charge" @click="try_charge">
                  Charge
                </div>
              </div>
            </div>
            <div class="field">
              <label>Address</label>
              <textarea name="address" cols="30" rows="4" v-model="address"></textarea>
            </div>
            <div class="field">
              <div class="ui big blue button" @click="set_address">
                Apply New Address
              </div>
            </div>
          </div>
          <table class="ui compact green table">
            <thead>
              <tr>
                <th colspan="3">Recent Orders</th>
              </tr>
              <tr>
                <th>Item</th>
                <th>Amount</th>
                <th>Time</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="order in orders">
                <td class="six wide collapsing">{{ order.item }}</td>
                <td class="four widecollapsing">{{ order.amount }}</td>
                <td class="six wide collapsing">{{ order.time }}</td>
              </tr>
            </tbody>
            <!-- <tfoot>
              <tr>
                <th colspan="3">
                  <div class="ui right floated pagination menu">
                    <a class="icon item">
                      <i class="left chevron icon"></i>
                    </a>
                    <a class="item">1</a>
                    <a class="item">2</a>
                    <a class="item">3</a>
                    <a class="item">4</a>
                    <a class="icon item">
                      <i class="right chevron icon"></i>
                    </a>
                  </div>
                </th>
              </tr>
            </tfoot> -->
          </table>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import $ from 'jquery'
// import Promise from 'es6-promise'

export default {
  data: function () {
    return {
      orders: [],
      balance: 0,
      chargeAmount: 0,
      address: ''
    }
  },
  vuex: {
    getters: {
      user: (state) => state.user
    }
  },
  route: {
    data: function (transition) {
      if (!this.user.logged_in) {
        transition.redirect({ name: 'login' })
      }
      var datas = {}
      // var app = this

      // 异步操作获取数据
      $.get('http://107.182.176.96:2333/profile', function (data) {
        datas.balance = data.balance
        datas.address = data.userAddress

        $.get('http://107.182.176.96:2333/orders', function (data) {
          var orderS = []
          for (var order in data.orders) {
            orderS.push({
              item: data.orders[order].orderItemId,
              amount: data.orders[order].orderPrice,
              time: data.orders[order].orderTime
            })
          }
          datas.orders = orderS

          transition.next(datas)
        }, 'JSON')
      }, 'JSON')
    }
  },
  methods: {
    try_charge: function (e) {
      var chargeAmount = Number(this.chargeAmount)
      console.log(e.target)
      var button = e.target
      var app = this

      $(e.target).addClass('loading')

      $.post('http://107.182.176.96:2333/charge', {
        amount: chargeAmount
      }, function (status, newBalance) {
        $(button).removeClass('loading')
        $(button).addClass('green')
        setTimeout(function () {
          $(button).removeClass('green')
        }, 1000)

        if (status.success) app.balance = app.balance + chargeAmount
      }, 'JSON')
    },
    set_address: function (e) {
      var button = e.target
      var app = this

      $(e.target).addClass('loading')

      $.post('http://107.182.176.96:2333/profile', {
        address: app.address
      }, function (status) {
        $(button).removeClass('loading')
        $(button).addClass('green')
        setTimeout(function () {
          $(button).removeClass('green')
        }, 1000)

        if (status.success) app.address = app.address
      }, 'JSON')
    }
  }
}
</script>

<style lang='less' scoped>
.charge {
  margin-top: 24px;
}
.form {
  .ui.header {
    margin-top: 0.65em;
  }
}
</style>
