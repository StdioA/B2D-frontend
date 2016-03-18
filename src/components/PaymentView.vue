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
    <!--
    <div class="row">
      <div class="ui ten wide column">
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
    -->
  </div>
</template>

<script>
export default {
}
</script>

<style lang='less'>
</style>
