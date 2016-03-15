<template>
  <div class="ui container">
    <h1>Test App!</h1>
    <router-view
      class="view"
      keep-alive
      transition
      transition-mode="out-in">
    </router-view>
  </div>
</template>
