import { useMutation } from '@tanstack/vue-query'
import type { UseMutationReturnType } from '@tanstack/vue-query'
import { authService } from '@/services/authService'

export function useAuth(): UseMutationReturnType<any, any, any, any> {
  return useMutation({
    mutationFn: ({ username, password }: { username: string; password: string }) =>
      authService.requisitions.auth(username, password),
  })
}
