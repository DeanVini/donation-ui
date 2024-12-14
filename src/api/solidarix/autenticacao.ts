import api from '@/api/solidarix/instanciaAxios'

export async function autenticar(login: string, senha: string) {
  try {
    const resposta = await api.post('/login', { login, senha })
    return resposta.data || resposta
  } catch (erro: any) {
    throw new Error(erro.response.data.mensagem || 'Erro ao fazer login na API')
  }
}
