import { useMutation } from '@tanstack/vue-query'
import type { UseMutationReturnType } from '@tanstack/vue-query'
import { autenticar } from '@/api/solidarix/autenticacao.ts'

export function useAutenticacao(): UseMutationReturnType<any, any, any, any> {
  return useMutation({
    mutationFn: ({ login, senha }: { login: string; senha: string }) => autenticar(login, senha),
  })
}
