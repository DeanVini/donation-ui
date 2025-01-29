import { useInjector } from '@/composables/useInjector'

export const authService = {
  route: 'login',
  requisitions: {
    auth: (username: string, password: string) => {
      return useInjector()
        .post()
        .setData({ username, password })
        .setRoute(authService.route)
        .execute()
    },
  },
}
