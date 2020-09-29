import Vue from 'vue'
import VueRouter from 'vue-router'
import Welcome from '../views/Welcome.vue'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'index',
    redirect: '/welcome',
    component: Welcome
  },
  {
    path: '/welcome',
    name: 'Welcome',
    component: function () {
      return import('../views/Welcome.vue')
    }
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: function () {
      return import(/* webpackChunkName: "about" */ '../views/About.vue')
    }
  },
  {
    path: '/home',
    name: 'Home',
    component: function () {
      return import('../views/Home.vue')
    }
  },
  {
    path: '/vues',
    name: 'VueS',
    component: function () {
      return import('../views/VueS.vue')
    }
  },
  {
    path: '/work',
    name: 'Work',
    component: function () {
      return import('../views/Homeworks/PreviewHomework.vue')
    }
  },
  {
    path: '/work/X',
    name: 'Work',
    component: function () {
      return import('../views/Homeworks/PreviewHomeworkX.vue')
    }
  }
]

const router = new VueRouter({
  routes
})

export default router
