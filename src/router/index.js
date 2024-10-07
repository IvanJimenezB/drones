import { createRouter, createWebHistory } from 'vue-router'
import Dashboard from '../views/WelcomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'raiz',
      component: Dashboard
    },
    {
      path: '/home',
      name: 'home',
      component: () => import('../views/HomeView.vue'),
      children: [
        {
          path: '/about',
          name: 'about',
          component: import('../views/AboutView.vue')
        }]
    }
  ]
})

export default router
