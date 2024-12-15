import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import LoginUsuario from '@/views/LoginUsuario.vue'
import { useEstadoAutenticacao } from '@/composables/useEstadoAutenticacao'

function lazyLoadView(view: string) {
  return () => import(`../views/${view}.vue`)
}

function lazyLoadComponent(component: string) {
  return () => import(`../components/${component}.vue`)
}

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: lazyLoadView('HomeView'),
      meta: { requiresAuth: true },
    },
    {
      path: '/login',
      name: 'login',
      component: lazyLoadView('LoginUsuario'),
    },
  ],
})

router.beforeEach((to, from, next) => {
  const { usuarioLogado } = useEstadoAutenticacao()
  if (to.meta.requiresAuth && !usuarioLogado.value) {
    next({ path: '/login' })
  } else if (to.path === '/login' && usuarioLogado.value) {
    next({ path: '/' })
  } else {
    next()
  }
})

export default router
