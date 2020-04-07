<template>
  <div id="app">
      <router-view></router-view>
  </div>
</template>

<script>
import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)
import router from './routes/index'

export default {
  name:'app',
  router
}
</script>
  
