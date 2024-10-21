import { createRouter, createWebHistory } from 'vue-router'
import Dashboard from '../views/Dashboard.vue'

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
          path: '',
          name: 'intro',
          component: () => import('../views/IntroView.vue')
        },
        {
          path: '/pilotear',
          name: 'pilotear',
          component: () => import('../views/PilotearView.vue')
        },
        {
          path: '/tipos',
          name: 'tipos',
          component: () => import('../views/TiposView.vue')
        },
        {
          path: '/partes',
          name: 'partes',
          component: () => import('../views/PartesView.vue')
        },
        {
          path: '/resultado',
          name: 'resultado',
          component: () => import('../views/ResultadosView.vue')
        },
        {
          path: '/caracteristicas',
          name: 'caracteristicas',
          component: () => import('../views/AlcanceView.vue')
        },
        {
          path: '/dron',
          name: 'dron',
          component: () => import('../views/Dron.vue')
        },
        {
          path: '/evolucion',
          name: 'evolucion',
          component: () => import('../views/EvolucionView.vue')
        },
        {
          path: '/about',
          name: 'about',
          component: () => import('../views/PilotearView.vue')
        },
      ]
    }
  ]
})

export default router
