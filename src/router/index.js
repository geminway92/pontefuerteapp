import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/list-products',
    name: 'ListProducts',
    component: () => import(/* webpackChunkName: "list-products" */ '../views/ListProducts.vue')
  },
  {
    path: '/list-products:id',
    name: 'ViewsProducts',
    component: () => import(/* webpackChunkName: "views-products" */ '../views/ViewsProducts.vue')
  },
  {
    path: '/cart',
    name: 'Cart',
    component: () => import(/* webpackChunkName: "cart" */ '../views/Cart.vue')
  },
  {
    path: '/pay',
    name: 'Pay',
    component: () => import(/* webpackChunkName: "pay" */ '../views/Pay.vue')
  }

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
