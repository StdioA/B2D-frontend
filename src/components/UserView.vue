<template>
  <div class="ui main container items centered grid profile">
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
                    <input type="text" name="charge" placeholder="Amount">
                    <div class="ui basic label">€</div>
                  </div>
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
              <div class="ui big blue button">
                Apply
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
            <tfoot>
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
            </tfoot>
          </table>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data: function () {
    return {
      orders: [
        {
          item: 'item1',
          amount: 1,
          time: 'time1'
        },
        {
          item: 'item2',
          amount: 2,
          time: 'time2'
        },
        {
          item: 'item3',
          amount: 3,
          time: 'time3'
        }
      ],
      balance: 0
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
      // 异步操作获取数据
      setTimeout(function () {
        transition.next()
      }, 1000)
    }
  }
}
</script>

<style lang='less'>
.profile {
  .charge {
    margin-top: 24px;
  }
  .form {
    .ui.header {
      margin-top: 0.65em;
    }
  }
  .ui.loading.segment:before {
    background: rgba(238, 238, 238, 0.8);
  }
}
</style>
