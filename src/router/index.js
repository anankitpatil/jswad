import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Practices from '@/components/Practices'
import Clients from '@/components/Clients'
import About from '@/components/About'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/practices',
      name: 'Practices',
      component: Practices
    },
    {
      path: '/clients',
      name: 'Clients',
      component: Clients
    },
    {
      path: '/about',
      name: 'About',
      component: About
    }
  ]
})
