<template>
  <div class="ui main container center aligned two column very relaxed stackable divided grid">
    <div class="eight wide column">
      <div class="row">
        <img class="ui fluid image" src="{{ item.picture_url }}">
      </div>
    </div>
    <!-- <div class="ui vertical divider"></div> -->
    <div class="six wide middle aligned left aligned column">
      <div class="row">
        <div class="container">
          <div class="ui fluid card">
            <!-- <div class="image"></div> -->
            <div class="content">
              <h1 class="ui huge header dividing">{{ item.name }}</h1>
              <div class="description">{{ item.description }}</div>
              <h2 class="ui large header red">{{ item.price }}<span><i class="euro icon"></i></span></h2>
              <h2 class="ui large header green">{{ item.instock ? 'In stock' : 'Out of stock' }}</h2>
              <div class="ui big icon input">
                <input class="amount" type="text" placeholder="Amount">
              </div>
              <div class="ui button bottom attached orange labeled icon button" :class="{ 'disabled': !item.instock }" @click="buy"><i class="cart icon"></i> Buy</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { select_item } from '../store/actions'

export default {
  data: function () {
    return {
      item: {}
    }
  },
  vuex: {
    actions: {
      select_item
    },
    getters: {
      items: (state) => state.items
    }
  },
  route: {
    data: function (transition) {
      console.log('data called')
      if (this.items.length === 0) {
        transition.redirect({ name: 'items' })
      } else {
        var id = Number(transition.to.params.id)
        var item
        for (let i in this.items) {
          console.log(this.items[i].id)
          if (this.items[i].id === id) {
            item = this.items[i]
            console.log(item)
            break
          }
        }
        // var item = this.items.filter(function (item) {
        //   console.log(id)
        //   return item.id === id
        // })[0]
        console.log(id)
        console.log(this.items)
        transition.next({
          item: item
        })
      }
    },
    activate: function (transition) {
      console.log('activate called')
      transition.next()
    }
  },
  methods: {
    buy: function () {
      // 记录当前item id
      console.log('Buy ' + this.item.id)
      this.select_item(this.item.id)
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
