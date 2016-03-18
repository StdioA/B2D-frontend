<template>
<div class="ui main container items">
  <h1>Items List</h1>
  <div class="ui special link cards">
    <item-card :item.once="i" v-for="i in 10"></item-card>
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
  components: {
    ItemCard
  },
  route: {
    activate: ({ next }) => {
      console.log('dimmer')
      // 这里有问题！
      $('.special.cards .image').dimmer({
        on: 'hover'
      })
      next()
    }
  }
}
</script>

<style lang="less">
.ui.menu .item img.logo {
  margin-right: 1.5em;
}
.main.container {
  margin-top: 7em;
}
.items {
  .ui.text.container {
    width: 70%;
  }
}

</style>
