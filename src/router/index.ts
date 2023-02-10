import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import news from '../views/newsView.vue'
import add from '../views/addView.vue'
import drop from '../views/dropView.vue'
import card from '../views/cardView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [{
    path: '/card',
    name: 'card',
    component: card
  },
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/add',
      name: 'add',
      component: add
    },
    {
      path: '/drop',
      name: 'drop',
      component: drop
    },
    {
      path: '/news',
      name: 'news',
      component: news
    }
    
  ]
})

export default router
