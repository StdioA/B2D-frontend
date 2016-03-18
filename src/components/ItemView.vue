<template>
  <div class="ui main container center aligned two column very relaxed stackable divided grid item">
    <div class="eight wide column">
      <div class="row">
        <img class="ui fluid image" src="../assets/HDMI_hdmi2.svg">
      </div>
    </div>
    <!-- <div class="ui vertical divider"></div> -->
    <div class="six wide middle aligned left aligned column">
      <div class="row">
        <div class="container">
          <div class="ui fluid card">
            <div class="image"></div>
            <div class="content">
              <h1 class="ui huge header dividing">HDMI Cable</h1>
              <div class="description">A HDMI cable in super high quality.</div>
              <h2 class="ui large header red">{{price}}<span><i class="euro icon"></i></span></h2>
              <h2 class="ui large header green">{{instock ? 'In stock' : 'Out of stock'}}</h2>
              <div class="ui big icon input">
                <input class="amount" type="text" placeholder="Amount">
              </div>
              <div class="ui button bottom attached orange labeled icon button" v-bind:class="{ 'disabled': !instock }"  @click="buy"><i class="cart icon"></i> Buy</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { select_item } from '../store/actions'

export default {
  data: () => {
    return {
      instock: true,
      price: 5
    }
  },
  vuex: {
    actions: {
      select_item
    }
  },
  methods: {
    buy: function () {
      // 记录当前item id
      this.select_item(this.$route.params.id)
      this.$router.go({ name: 'payment' })
    }
  }
}
</script>

<style lang="less">
.item {
  .main.container {
   margin-top: 7em;
  }
  .ui.big{
   margin-bottom: 15px;
  }
}
</style>
