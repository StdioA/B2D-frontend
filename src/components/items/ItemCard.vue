<template>
<div class="special link card" v-for="i in 10">
  <div class="blurring dimmable image">
    <div class="ui dimmer">
      <div class="content">
        <div class="center">
          <div class="ui inverted button">Buy Buy Buy</div>
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
// import $ from 'jquery'

export default {
  props: ['item'],
  compiled: function () {
  }
}
</script>
