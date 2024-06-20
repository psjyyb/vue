import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Header from '../components/Header.vue'
import Footer from '../components/Footer.vue'
import TestView from '../views/TestView.vue'
const routes = [
  {
    path: '/testView',
    name: 'testView',
    component: TestView
  },
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/header',
    name: 'header',
    component: Header
  },
  {
    path: '/footer',
    name: 'footer',
    component: Footer
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path: '/board',
    name: 'board',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "board" */ '../views/BoardList.vue')
  },
  {
    path: '/boardInfo',
    name: 'boardInfo',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "boardInfo" */ '../views/BoardInfo.vue')
  },
  {
    path: '/boardInsert',
    name: 'boardInsert',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "boardInsert" */ '../views/BoardInsert.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
