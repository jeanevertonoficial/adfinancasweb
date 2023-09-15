import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('../views/DashboardView.vue')
    },
    {
      path: '/gerenciador-de-pagamentos',
      name: 'pagamentos',
      component: () => import('../views/GerenciadorDePagamentosView.vue')
    },
  ]
})

export default router
