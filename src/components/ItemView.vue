<template>
  <div class="ui main container">
    <div class="ui basic segment" :class="{ 'loading': $loadingRouteData }">
    <div class="ui center aligned two column very relaxed stackable divided grid">
      <div class="eight wide column">
        <div class="row">
          <img class="ui fluid image" src="{{ item.itemPhoto }}">
        </div>
      </div>
      <div class="six wide middle aligned left aligned column">
        <div class="row">
          <div class="container">
            <div class="ui fluid card">
              <div class="content">
                <h1 class="ui huge header dividing">{{ item.itemName }}</h1>
                <div class="description">{{ item.itemDes }}</div>
                <h2 class="ui large header red">{{ item.itemPrice }}<span><i class="euro icon"></i></span></h2>
                <h2 class="ui large header green">{{ item.itemAmount ? 'In stock' : 'Out of stock' }}</h2>
                <div class="ui big icon input" :class="{'disabled': !item.itemAmount}">
                  <input class="amount" type="text" placeholder="Amount" v-model="quantity">
                </div>
                <div class="ui button bottom attached orange labeled icon button" :class="{ 'disabled': !item.itemAmount }" @click="buy"><i class="cart icon"></i> Buy</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
  </div>
</template>

<script>
import $ from 'jquery'
import { make_order } from '../store/actions'

export default {
  data: function () {
    return {
      item: {},
      quantity: 1
    }
  },
  vuex: {
    actions: {
      make_order,

      add_item: function ({dispatch}, item) {
        // 添加商品
        dispatch('ADD_ITEM', item)
      }
    },
    getters: {
      items: (state) => state.items
    }
  },
  route: {
    data: function (transition) {
      var id = Number(transition.to.params.id)
      var item = this.items[id]
      var app = this
      if (item === undefined) {
        // 异步加载item
        $.get('http://107.182.176.96:2333/item/' + id, function (data, status) {
          if (status === 'success' && data.success) {
            app.add_item(data.item)
            transition.next({
              item: data.item
            })
          }
        }, 'JSON')
        // item = {
        //   id: id,
        //   instock: true,
        //   price: 5,
        //   name: 'HDMI Cable #' + id,
        //   category: 'electronic',
        //   description: 'A HDMI cable in super high quality.',
        //   publish_time: 'Mar. 19th',
        //   picture_url: 'https://ss0.bdstatic.com/5aV1bjqh_Q23odCf/static/superman/img/logo/bd_logo1_31bdc765.png'
        // }
        // this.add_item(item)
        // setTimeout(function () {
        //   transition.next({
        //     item: item
        //   })
        // }, 2000)
      } else {
        transition.next({
          item: item
        })
      }
    },
    activate: function (transition) {
      // console.log('activate called')
      transition.next()
    }
  },
  methods: {
    buy: function () {
      // 记录当前item id
      // console.log('Buy ' + this.item.id)
      // this.select_item(this.item.id)
      this.make_order({
        item_id: this.item.id,
        quantity: this.quantity
      })
      this.$router.go({ name: 'payment' })
    }
  }
}
</script>

<style lang="less" scoped>
.main.container {
  margin-top: 7em;
}
.ui.big {
  margin-bottom: 15px;
}
</style>
