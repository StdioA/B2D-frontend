<template>
<div class="ui main container items">
  <h1>Items List</h1>
  <div class="ui link cards">
    <div class="link card" v-for="i in 10">
      <div class="image">
        <img src="../assets/HDMI_hdmi2.svg">
      </div>
      <div class="content">
        <a v-link="{ name:'item', params: { id: i } }"
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
  </div>
</div>
</template>

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
