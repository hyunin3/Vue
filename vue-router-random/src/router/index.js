import Vue from 'vue'
import VueRouter from 'vue-router'
import MyLotto from '../views/MyLotto.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'lotto',
    component: MyLotto
  },
  {
    path: '/lunch',
    name: 'lunch',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/MyLunch.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
