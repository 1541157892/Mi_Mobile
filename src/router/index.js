import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/pages/Home/Home'
import Category from '@/pages/Category/category'
import Search from '@/pages/Search/Search'
import Cart from '@/pages/Cart/Cart'
import User from '@/pages/User/User'
import Details from '@/pages/Details/Details'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
      // component: () => import('@/pages/Home/Home')
    },
    {
      path: '/Category',
      name: 'Category',
      component: Category
      // component: () => import('@/pages/Category/category')
    },
    {
      path: '/Search',
      name: 'Search',
      component: Search
    },
    {
      path: '/Cart',
      name: 'Cart',
      component: Cart
    },
    {
      path: '/User',
      name: 'User',
      component: User
    },
    {
      path: '/Details',
      name: 'Details',
      component: Details
    }
  ]
})
