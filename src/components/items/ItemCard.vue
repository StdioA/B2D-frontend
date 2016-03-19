<template>
<div class="special link {{ color }} card">
  <div class="blurring dimmable image">
    <div class="ui dimmer">
      <div class="content">
        <div class="center">
          <div class="ui inverted button" @click="buy">Buy now</div>
        </div>
      </div>
    </div>
    <img src="{{ item.picture_url }}">
  </div>
  <div class="content">
    <a v-link="{ name:'item', params: { id: item.id } }"
        class="header">{{ item.name }}</a>
    <div class="meta">
      <a>{{ item.category }}</a>
    </div>
    <div class="description">{{ item.description }}</div>
  </div>
  <div class="extra content">
    <span class="right floated"> Published @ {{ item.published_time }}</span>
    <span><i class="euro icon"></i> {{ item.price }} </span>
  </div>
</div>
</template>

<script>
import { select_item } from '../../store/actions'

export default {
  data: function () {
    return {
      color: this.random_color()
    }
  },
  props: ['item'],
  vuex: {
    actions: {
      select_item
    }
  },
  methods: {
    random_color: function () {
      // Select a random color for the card
      var colors = [
        'red',
        'orange',
        'yellow',
        'olive',
        'green',
        'teal',
        'blue',
        'violet',
        'purple',
        'pink',
        'brown'
      ]
      return colors[Math.floor(Math.random() * (colors.length))]
    },
    buy: function () {
      // 记录当前item id
      this.select_item(this.item.id)
      this.$router.go({ name: 'payment' })
    }
  },
  compiled: function () {
  }
}
</script>
