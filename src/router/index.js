import Vue from 'vue'
import Router from 'vue-router'
import home from '@/pages/home'
import item from '@/pages/item'
import score from '@/pages/score'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: home
    },
    {
      path: '/item',
      name: 'item',
      component: item
    },
    {
      path: '/score',
      name: 'score',
      component: score
    }
  ]
})
