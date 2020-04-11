import Vue from 'vue'
import Router from 'vue-router'
// import Home from '@/pages/Home/Home'
// import Category from '@/pages/Category/category'
// import Search from '@/pages/Search/Search'
// import Cart from '@/pages/Cart/Cart'
// import User from '@/pages/User/User'
// import Details from '@/pages/Details/Details'
// component: () => import('@/pages/Category/category')

Vue.use(Router)

export default new Router({
  mode: 'hash',
  routes: [{
    path: '/v03033/chanke/mi/dist/index.html',
    name: 'Home',
    component: () => import('@/pages/Home/Home')
  }, {
    path: '/Category',
    name: 'Category',
    component: () => import('@/pages/Category/Category')
  }, {
    path: '/Search',
    name: 'Search',
    component: () => import('@/pages/Search/Search')
  }, {
    path: '/Cart',
    name: 'Cart',
    component: () => import('@/pages/Cart/Cart')
  }, {
    path: '/User',
    name: 'User',
    component: () => import('@/pages/User/User')
  }, {
    path: '/Details',
    name: 'Details',
    component: () => import('@/pages/Details/Details')
  }]
})
