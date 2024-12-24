import { computed, ref } from 'vue'

const token = ref<string | null>(localStorage.getItem('token'))

export function useAuthState() {
  const loggedUser = computed(() => !!token.value)

  const saveToken = (newToken: string) => {
    token.value = newToken
    localStorage.setItem('token', newToken)
  }

  const removerToken = () => {
    token.value = null
    localStorage.removeItem('token')
  }

  return {
    loggedUser,
    token,
    saveToken,
    removerToken,
  }
}
