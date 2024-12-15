import { computed, ref } from 'vue'

const token = ref<string | null>(localStorage.getItem('token'))

export function useEstadoAutenticacao() {
  const usuarioLogado = computed(() => !!token.value)

  const salvarToken = (novoToken: string) => {
    token.value = novoToken
    localStorage.setItem('token', novoToken)
  }

  const removerToken = () => {
    token.value = null
    localStorage.removeItem('token')
  }

  return {
    usuarioLogado,
    token,
    salvarToken,
    removerToken,
  }
}
