import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Cart from "@/components/Cart.vue"
import Index from "@/components/Index.vue"
import Order from "@/components/Order.vue"
import Goods from "@/components/Goods.vue";

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: "/",
      name: "Index",
      component:Index
    },
    {
      path: '/home',
      name: Home,
      component:  Home
    },
    {
      path: '/goods',
      name: "Goods",
      component:  Goods
    },
    {
      path: "/index",
      name: "Index",
      component:Index
    },
    {
      path: "/cart",
      name: "Cart",
      component:Cart
    },
    {
      path: "/order",
      name: "Order",
      component:Order
    },
  ]
})
