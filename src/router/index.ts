import { createRouter, createWebHistory } from 'vue-router'
import { useAuthState } from '@/composables/useAuthState'
import DefaultLayout from '@/layouts/DefaultLayout.vue'
import NoAuthLayout from '@/layouts/NoAuthLayout.vue'
import { useRouterStore } from '@/stores/router'

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
      meta: { requiresAuth: true, layout: DefaultLayout },
    },
    {
      path: '/login',
      name: 'login',
      component: lazyLoadView('LoginView'),
      meta: { layout: NoAuthLayout },
    },
    {
      path: '/person',
      name: 'person',
      component: lazyLoadView('HomeView'),
      meta: { requiresAuth: true, layout: DefaultLayout },
    },
    {
      path: '/address',
      name: 'address',
      component: lazyLoadView('AddressList'),
      meta: { requiresAuth: true, layout: DefaultLayout },
    },
    {
      path: '/service',
      name: 'service',
      component: lazyLoadView('HomeView'),
      meta: { requiresAuth: true, layout: DefaultLayout },
    },
    {
      path: '/family',
      name: 'family',
      component: lazyLoadView('HomeView'),
      meta: { requiresAuth: true, layout: DefaultLayout },
    },
  ],
})

router.beforeEach((to, from, next) => {
  const { loggedUser } = useAuthState()
  const routerStore = useRouterStore()
  routerStore.setCurrentRoute(to.path)
  if (to.meta.requiresAuth && !loggedUser.value) {
    next({ path: '/login' })
  } else if (to.path === '/login' && loggedUser.value) {
    next({ path: '/' })
  } else {
    next()
  }
})

export default router
