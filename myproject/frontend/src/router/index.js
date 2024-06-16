import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue';
import CustomerInsert from '../views/CustomerInsertForm.vue';
import LoginForm from '@/views/LoginForm.vue';
import BoardView from '../views/BoardView.vue'
import BoardInfo from '../views/BoardInfo.vue'
import BoardInsert from '../views/BoardInsert.vue'
import ReplyView from '../views/ReplyView.vue'

const routes = [
  {
    path: '/replyView',
    name: 'replyView',
    component: ReplyView
  },
  {
    path: '/boardInsert',
    name: 'boardInsert',
    component: BoardInsert
  },
  {
    path: '/boardInfo',
    name: 'boardInfo',
    component: BoardInfo
  },
  {
    path: '/boardView',
    name: 'boardView',
    component: BoardView
  },
  {
    path: '/loginForm',
    name: 'loginForm',
    component: LoginForm
  },
  {
    path: '/customerInsert',
    name: 'customerInsert',
    component: CustomerInsert
  },
  {
    path: '/customer',
    name: 'customer',
    component:() => import(/* webpackChunkName: "customer" */ '../views/CustomerView.vue')
  },
  {
    path: '/customerInfo',
    name: 'customerInfo',
    component:() => import(/* webpackChunkName: "customerInfo" */ '../views/CustomerInfo.vue')
  },
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
