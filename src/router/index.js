import { createRouter, createWebHistory } from 'vue-router'
import Layout from '@/views/layout/index.vue'
import Home from '@/views/Home.vue'

const routes = [
  {
    path: '/',
    component: Layout,
    children: [
      {
        path: '',
        name: 'Home',
        component: Home,
      },
      // {
      //   path: '/about',
      //   name: 'About',
      //   // route level code-splitting
      //   // this generates a separate chunk (about.[hash].js) for this route
      //   // which is lazy-loaded when the route is visited.
      //   component: () => import(/* webpackChunkName: "about" */ '../views/About.vue'),
      // },
    ],
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
