import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/element-ui',
      name: 'ElementUI',
      component: () => import('./views/ElementUI.vue')
    },
    {
      path: '/iview',
      name: 'iView',
      component: () => import('./views/iView.vue')
    }
  ]
})
