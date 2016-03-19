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
    <img src="../../assets/HDMI_hdmi2.svg">
  </div>
  <div class="content">
    <a v-link="{ name:'item', params: { id: item } }"
        class="header">HDMI Cable</a>
    <div class="meta">
      <a>Electronic</a>
    </div>
    <div class="description">A HDMI cable in super high quality.</div>
  </div>
  <div class="extra content">
    <span class="right floated"> Published @ Mar. 17th </span>
    <span><i class="euro icon"></i> 5 </span>
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
      this.select_item(this.item)
      this.$router.go({ name: 'payment' })
    }
  },
  compiled: function () {
  }
}
</script>
