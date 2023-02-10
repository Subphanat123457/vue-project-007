<template>
  <div>
    <navbar />
    <div class="flex-container margin-item">
      <SlideBar />
      <router-view></router-view>
    </div> 
</div>
</template>

<script>
import navbar from './components/navbar.vue'
import SlideBar from './components/slideBar.vue'
import news from './components/news.vue'

import { RouterLink, RouterView } from 'vue-router'



export default {
  name: 'app',
  components: { navbar, SlideBar, news }
}
</script>

<style>
.flex-container {
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: normal;
  align-items: normal;
  align-content: normal;
}
.margin-item{
  margin: 50px 50px;
}
</style>
