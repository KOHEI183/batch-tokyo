import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes: Array<RouteConfig> = [
  {
    path: '/',
    name: 'Home',
    meta: { title: 'ホーム', desc: '' },
    component: Home
  },
  {
    path: '/achievements',
    name: 'Achievements',
    meta: { title: '実績', desc: '' },
    component: () => import(/* webpackChunkName: "achievements" */ '../views/Achievements.vue')
  },
  {
    path: '/googleform',
    name: 'GoogleForm',
    meta: { title: '問合せ', desc: '' },
    component: () => import(/* webpackChunkName: "googleform" */ '../views/GoogleForm.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
