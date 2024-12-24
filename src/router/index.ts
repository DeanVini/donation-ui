import { createRouter, createWebHistory } from 'vue-router'
import { useAuthState } from '@/composables/useAuthState'

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
  const { loggedUser } = useAuthState()
  if (to.meta.requiresAuth && !loggedUser.value) {
    next({ path: '/login' })
  } else if (to.path === '/login' && loggedUser.value) {
    next({ path: '/' })
  } else {
    next()
  }
})

export default router
