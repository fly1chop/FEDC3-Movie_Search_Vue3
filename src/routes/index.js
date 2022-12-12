import { createRouter, createWebHistory } from 'vue-router'
import Home from './Home'
import SearchMovie from './SearchMovie'

export default createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/search',
      name: 'search',
      component: SearchMovie,
      props: route => ({ query: route.query.keyword })
    },
  ]
})
