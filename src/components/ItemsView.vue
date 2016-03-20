<template>
<div class="ui main centered equal width grid basic segment" :class="{ 'loading': $loadingRouteData }">
  <div class="row">
    <h1>Items List</h1>
  </div>
  <div class="two column centered row">
    <div class="twelve wide column">
      <div class="ui special doubling four cards">
        <item-card :item.once="item" v-for="item in items"></item-card>
      </div>
    </div>
  </div>
</div>
</template>

<script>
import $ from 'jquery'
import jQuery from 'jquery'
window.jQuery = jQuery
require('../semantic/dist/semantic.js')

import ItemCard from './items/ItemCard'

export default {
  data: function () {
    return {
      items: {}
    }
    // var items = []
    // // 这里可以异步载入吗？
    // for (let i = 1; i <= 10; i++) {
    //   items.push({
    //     id: i,
    //     instock: true,
    //     price: 5,
    //     name: 'HDMI Cable #' + i,
    //     category: 'electronic',
    //     description: 'A HDMI cable in super high quality.',
    //     publish_time: 'Mar. 19th',
    //     picture_url: 'https://ss0.bdstatic.com/5aV1bjqh_Q23odCf/static/superman/img/logo/bd_logo1_31bdc765.png'
    //   })
    // }
    // this.add_items(items)
    // return {items: items}
  },
  components: {
    ItemCard
  },
  vuex: {
    getters: {
      items_loaded: (state) => state.all_items_loaded,
      items: (state) => state.items
    },
    actions: {
      add_items: ({ dispatch }, items) => {
        dispatch('ADD_ITEMS', items)
        dispatch('ALL_ITEMS_LOADED')
      }
    }
  },
  route: {
    // 应该在data钩子里异步载入
    data: function (transition) {
      if (this.items_loaded) {
        // 已经缓存所有商品，直接调用
        transition.next({ items: this.items })
        setTimeout(function () {
          $('.special.cards .image').dimmer({
            on: 'hover'
          })
        }, 1000)
      } else {
        var app = this
        $.get('http://107.182.176.96:2333/items', function (data, status) {
          if (status === 'success' && data.success) {
            app.add_items(data.items)
            transition.next({items: data.items})
          }
          setTimeout(function () {
            $('.special.cards .image').dimmer({
              on: 'hover'
            })
          }, 1000)
        }, 'JSON')
      }
    }
  }
}
</script>

<style lang="less" scoped>
.main.container {
  margin-top: 7em;
}
.ui.text.container {
  width: 70%;
}
</style>
