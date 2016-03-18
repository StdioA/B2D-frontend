<template>
<div class="ui main centered equal width grid items">
  <div class="row">
    <h1>Items List</h1>
  </div>
  <div class="two column centered row">
    <div class="twelve wide column">
      <div class="ui special doubling four cards">
        <item-card :item.once="i" v-for="i in 10"></item-card>
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
  components: {
    ItemCard
  },
  ready: function () {
    $.ready(function () {
      $('.special.cards .image').dimmer({
        on: 'hover'
      })
    })
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
