<template>
<!-- Following Menu -->
<!-- <div class="ui large top fixed hidden menu">
  <div class="ui container">
  <a class="active item">Home</a>
  <a class="item">Work</a>
  <div v-if="!user.logged_in" class="right menu">
    <div class="item">
      <a v-link="{ name: 'login' }" class="item">Log in</a>
    </div>
    <div class="item">
      <a class="ui primary button">Sign Up</a>
    </div>
  </div>
  <div class="ui simple right dropdown item" v-else>
    <a class="item" v-link="{ path: '/logout' }">Log out</a>
  </div>
  </div>
</div> -->

<!-- Sidebar Menu -->
<div class="ui vertical inverted sidebar menu">
  <a class="active item">Home</a>
  <a class="item">Login</a>
  <a class="item">Signup</a>
</div>


<!-- Page Contents -->
<div class="pusher homepage">
<div class="ui segments">
  <div class="ui inverted vertical masthead center aligned segment">
    <div class="ui container">
      <div class="ui large secondary inverted pointing noborder menu">
        <a class="toc item">
          <i class="sidebar icon"></i>
        </a>
        <a v-link="{ name: 'homepage' }" class="active item">Home</a>
        <a v-link="{ name: 'items' }" class="item">Item List</a>
        <div v-if="!user.logged_in" class="right item">
          <a v-link="{ name: 'login' }" class="ui inverted button">Log in</a>
          <a v-link="{ name: 'register' }"class="ui inverted button">Sign Up</a>
        </div>
        <div v-else class="ui right simple dropdown item" >
          {{ user.username }} <i class="dropdown icon"></i>
          <div class="menu">
            <a class="item" v-link="{ path: '/logout' }">Log out</a>
          </div>
        </div>

      </div>
    </div>

    <div class="ui text container">
      <h1 class="ui inverted header">
        Buy2Die
      </h1>
      <h2>Buy whatever you want when you want buy!</h2>
      <a v-link="{ name: 'login' }">
        <div class="ui huge primary button">Buy now!<i class="right arrow icon"></i></div>
      </a>
    </div>
  </div>

  <div class="ui vertical stripe quote segment">
    <div class="ui container">
      <h1 class="ui center aligned icon header group"><i class="circular users icon"></i> Group </h1>
      <div class="ui equal width stackable internally celled grid">
        <div class="center aligned row">
          <div class="column">
            <h3>
              <a href="https://github.com/phoenixe-nuaa/B2D-frontend/">
                Front-end <i class="github icon"></i>
              </a>
            </h3>
            <p>phoenixe-nuaa ---- geekinglcq</p>
          </div>
          <div class="column">
            <h3>
              <a href="https://github.com/geekinglcq/Buy2Die">
                Back-end <i class="github icon"></i>
              </a>
            </h3>
            <p>Alexandre Berthault ---- Alexandre Babaorum</p>
          </div>
        </div>
      </div>
    </div>
  </div>

  <div class="ui vertical segment">
    <div class="ui grid">
      <div class="ui center aligned row">
        <div class="column">
          <h1 class="ui header">The tools we use</h1>
        </div>
      </div>
      <div class="centered row">
        <div class="eight wide column logo-list">
          <a href="//nodejs.org" target="_blank" title="Node.js">
            <img class="tools-logo" src="../assets/logos/nodejs.png" alt="node icon">
          </a>
          <a href="//npmjs.com" target="_blank" title="npm">
            <img class="npm-logo" src="../assets/logos/npm-logo.svg" alt="npm icon">
          </a>
          <a href="//vuejs.org" target="_blank" title="Vue.js">
            <img class="tools-logo" src="../assets/logos/vue.svg" alt="vue icon">
          </a>
          <a href="//webpack.github.io" target="_blank" title="Webpack">
            <img class="tools-logo" src="../assets/logos/webpack.svg" alt="webpack icon">
          </a>
          <a href="//semantic-ui.com" target="_blank" title="Semantic UI">
            <img class="tools-logo" src="../assets/logos/semantic.png" alt="semantic icon">
          <a href="//quip.com" target="_blank" title="quip">
            <img class="tools-logo" src="../assets/logos/quip.png" alt="semantic icon">
          </a>
        </div>
      </div>
    </div>
  </div>

  <div class="ui vertical stripe segment">
    <div class="ui middle aligned stackable grid container">
      <div class="row">
        <div class="eight wide column">
          <h3 class="ui header">We use vue.js</h3>
          <h3 class="ui header">We Make Bananas That Can Dance</h3>
          <p>Yes that's right, you thought it was the stuff of dreams, but even bananas can be bioengineered.</p>
        </div>
        <div class="six wide right floated column">
          <img src="../assets/logos/vue.svg" class="ui middle image">
        </div>
      </div>
    </div>
  </div>

  <div class="ui inverted vertical footer segment">
    <div class="ui container">
      <div class="ui stackable inverted divided equal height stackable grid">
        <div class="three wide column">
          <h4 class="ui inverted header">买买买</h4>
          <div class="ui inverted link list">
            <a href="#" class="item">买买买</a>
            <a href="#" class="item">买买买</a>
            <a href="#" class="item">买买买</a>
            <a href="#" class="item">买买买</a>
          </div>
        </div>
        <div class="three wide column">
          <h4 class="ui inverted header">买买买</h4>
          <div class="ui inverted link list">
            <a href="#" class="item">买买买</a>
            <a href="#" class="item">买买买</a>
            <a href="#" class="item">买买买</a>
            <a href="#" class="item">买买买</a>
          </div>
        </div>
        <div class="seven wide column">
          <h4 class="ui inverted header">买！</h4>
          <p>Extra space for 买买买</p>
        </div>
      </div>
    </div>
  </div>
</div>
</div>
</template>

<script>
export default {
  vuex: {
    getters: {
      user: (state) => {
        return state.user
      }
    }
  },
  route: {
    data: function (transition) {
      // 若已登录且无?redirect=false则进行跳转
      if ((this.user.logged_in === true) && (transition.to.query.redirect !== 'false')) {
        transition.redirect({ name: 'items', query: {} })
      } else {
        transition.next()
      }
    }
  }
}
</script>

<style lang="less" scoped>
.homepage {
  .noborder {
    border: none !important;
  }
  .hidden.menu {
    display: none;
  }
  .masthead.segment {
    background: url("../assets/background2.jpg");
    backgorund-size: cover;
    width: 100%;
    min-height: 700px;
    padding: 1em 0em;
  }
  .masthead {
    .logo.item img {
      margin-right: 1em;
    }
    .ui.menu .ui.button {
      margin-left: 0.5em;
    }
    .ui.simple.dropdown.item {
      .menu {
        // position: relative;
        // top: -5px;
      }
    }
    h1.ui.header {
      margin-top: 3em;
      margin-bottom: 0em;
      font-size: 4em;
      font-weight: normal;

    }
    h2 {
      font-size: 1.7em;
      font-weight: normal;
    }
  }

  .ui.vertical.stripe {
    padding: 8em 0em;

    h3 {
      font-size: 2em;
    }
    .button + h3, p + h3 {
      margin-top: 3em;
    }
    .floated.image {
      clear: both;
    }
    p {
      font-size: 1.33em;
    }
    .horizontal.divider {
      margin: 3em 0em;
    }
  }

  .quote.stripe.segment {
    padding: 0em;

    .grid .column {
      padding-top: 5em;
      padding-bottom: 5em;
    }
  }

  .footer.segment {
    padding: 5em 0em;
  }

  .secondary.pointing.menu .toc.item {
    display: none;
  }

  @media only screen and (max-width: 700px) {
    .ui.fixed.menu {
      display: none !important;
    }
    .secondary.pointing.menu .item,
    .secondary.pointing.menu .menu {
      display: none;
    }
    .secondary.pointing.menu .toc.item {
      display: block;
    }
    .masthead.segment {
      min-height: 350px;
    }
    .masthead h1.ui.header {
      font-size: 2em;
      margin-top: 1.5em;
    }
    .masthead h2 {
      margin-top: 0.5em;
      font-size: 1.5em;
    }
  }
  .group.ui.icon.header {
    margin-top: 2em!important;
  }
  @logo-height: 6em;
  .logo-list {
    img {
      width: @logo-height;
      height: @logo-height;
      margin: 0 1em;

      &.npm-logo {
        width: 1.84 * @logo-height;
      }
    }
  }
}
</style>
