<template>
  <div class="ui main container">
    <div class="ui basic segment" :class="{ 'loading': $loadingRouteData }">
    <div class="ui center aligned two column very relaxed stackable divided grid">
      <div class="eight wide column">
        <div class="row">
          <img class="ui fluid image" src="{{ item.picture_url }}">
        </div>
      </div>
      <div class="six wide middle aligned left aligned column">
        <div class="row">
          <div class="container">
            <div class="ui fluid card">
              <div class="content">
                <h1 class="ui huge header dividing">{{ item.name }}</h1>
                <div class="description">{{ item.description }}</div>
                <h2 class="ui large header red">{{ item.price }}<span><i class="euro icon"></i></span></h2>
                <h2 class="ui large header green">{{ item.instock ? 'In stock' : 'Out of stock' }}</h2>
                <div class="ui big icon input">
                  <input class="amount" type="text" placeholder="Amount" v-model="quantity">
                </div>
                <div class="ui button bottom attached orange labeled icon button" :class="{ 'disabled': !item.instock }" @click="buy"><i class="cart icon"></i> Buy</div>
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
// import { select_item } from '../store/actions'
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
      if (item === undefined) {
        // 异步加载item
        item = {
          id: id,
          instock: true,
          price: 5,
          name: 'HDMI Cable #' + id,
          category: 'electronic',
          description: 'A HDMI cable in super high quality.',
          publish_time: 'Mar. 19th',
          picture_url: 'https://ss0.bdstatic.com/5aV1bjqh_Q23odCf/static/superman/img/logo/bd_logo1_31bdc765.png'
        }
        this.add_item(item)
        setTimeout(function () {
          transition.next({
            item: item
          })
        }, 2000)
        // transition.redirect({ name: 'items' })
      } else {
        // console.log('item get')
        // var item = this.items.filter(function (item) {
        //   return item.id === id
        // })[0]
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
