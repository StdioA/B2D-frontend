<template>
<!-- Following Menu -->
<!-- <div class="ui large top fixed hidden menu homepage">
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
<!-- <div class="ui vertical inverted sidebar menu">
  <a class="active item">Home</a>
  <a class="item">Work</a>
  <a class="item">Company</a>
  <a class="item">Careers</a>
  <a class="item">Login</a>
  <a class="item">Signup</a>
</div> -->


<!-- Page Contents -->
<div class="pusher homepage">
  <div class="ui inverted vertical masthead center aligned segment">

  <div class="ui container">
    <div class="ui large secondary inverted pointing menu">
      <a class="toc item">
        <i class="sidebar icon"></i>
      </a>
      <a class="active item">Home</a>
      <a class="item">Work</a>
      <div v-if="!user.logged_in" class="right item">
          <a v-link="{ name: 'login' }" class="ui inverted button">Log in</a>
          <a v-link="{ name: 'register' }"class="ui inverted button">Sign Up</a>
      </div>
      <div v-else class="ui simple right dropdown item" >
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
      <div class="ui huge primary button">买买买<i class="right arrow icon"></i></div>
    </a>
  </div>

  </div>

  <div class="ui vertical stripe segment">
  <div class="ui middle aligned stackable grid container">
    <div class="row">
    <div class="eight wide column">
      <h3 class="ui header">We use vue.js</h3>
      <p>We can give your company superpowers to do things that they never thought possible. Let us delight your customers and empower your needs...through pure data analytics.</p>
      <h3 class="ui header">We Make Bananas That Can Dance</h3>
      <p>Yes that's right, you thought it was the stuff of dreams, but even bananas can be bioengineered.</p>
    </div>
    <div class="six wide right floated column">
      <img src="../assets/logos/vue.svg" class="ui middle image">
    </div>
    </div>
    <div class="row">
    <div class="center aligned column">
      <a class="ui huge button" href="//vuejs.org">Check Them Out</a>
    </div>
    </div>
  </div>
  </div>


  <div class="ui vertical stripe quote segment homepage">
  <div class="ui equal width stackable internally celled grid">
    <div class="center aligned row">
    <div class="column">
      <h3>"What a Company"</h3>
      <p>That is what they all say about us</p>
    </div>
    <div class="column">
      <h3>"I shouldn't have gone with their competitor."</h3>
      <p>
      <!-- <img src="assets/images/avatar/nan.jpg" class="ui avatar image"> <b>Nan</b> Chief Fun Officer Acme Toys -->
      </p>
    </div>
    </div>
  </div>
  </div>

  <div class="ui vertical stripe segment">
  <div class="ui text container">
    <h3 class="ui header">Breaking The Grid, Grabs Your Attention</h3>
    <p>Instead of focusing on content creation and hard work, we have learned how to master the art of doing nothing by providing massive amounts of whitespace and generic content that can seem massive, monolithic and worth your attention.</p>
    <a class="ui large button">Read More</a>
    <h4 class="ui horizontal header divider">
    <a href="#">Case Studies</a>
    </h4>
    <h3 class="ui header">Did We Tell You About Our Bananas?</h3>
    <p>Yes I know you probably disregarded the earlier boasts as non-sequitor filler content, but its really true. It took years of gene splicing and combinatory DNA research, but our bananas can really dance.</p>
    <a class="ui large button">I'm Still Quite Interested</a>
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

</template>

<script>
export default {
  vuex: {
    getters: {
      user: (state) => {
        return state.user
      }
    }
  }
}
</script>

<style lang="less">
.homepage {
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
  .masthead .logo.item img {
    margin-right: 1em;
  }
  .masthead .ui.menu .ui.button {
    margin-left: 0.5em;
  }
  .masthead h1.ui.header {
    margin-top: 3em;
    margin-bottom: 0em;
    font-size: 4em;
    font-weight: normal;
  }
  .masthead h2 {
    font-size: 1.7em;
    font-weight: normal;
  }

  .ui.vertical.stripe {
    padding: 8em 0em;
  }
  .ui.vertical.stripe h3 {
    font-size: 2em;
  }
  .ui.vertical.stripe .button + h3,
  .ui.vertical.stripe p + h3 {
    margin-top: 3em;
  }
  .ui.vertical.stripe .floated.image {
    clear: both;
  }
  .ui.vertical.stripe p {
    font-size: 1.33em;
  }
  .ui.vertical.stripe .horizontal.divider {
    margin: 3em 0em;
  }

  .quote.stripe.segment {
    padding: 0em;
  }
  .quote.stripe.segment .grid .column {
    padding-top: 5em;
    padding-bottom: 5em;
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
}
</style>
