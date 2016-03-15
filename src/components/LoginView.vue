<template>
  <div id="app" class="ui center aligned grid">
    <div class="centered row">
      <h1>Login</h1>
    </div>
    <div class="centered row">
      <p>Username: {{ username }}</p>
    </div>
    <div class="centered row">
      <a v-link="{ path:'/hello' }">Home</a>
    </div>
  </div>
</template>

<script>
export default {
  name: 'LoginView',
  data: function () {
    return {username: 'User'}
  }
}
</script>
