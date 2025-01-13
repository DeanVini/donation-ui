import { useMutation } from '@tanstack/vue-query'
import type { UseMutationReturnType } from '@tanstack/vue-query'
import { auth } from '@/services/solidarix/api/auth'

export function useAuth(): UseMutationReturnType<any, any, any, any> {
  return useMutation({
    mutationFn: ({ username, password }: { username: string; password: string }) =>
      auth(username, password),
  })
}
