import api from './axiosInstance'

export async function auth(login: string, senha: string) {
  try {
    const resposta = await api.post('/login', { login, senha })
    return resposta.data || resposta
  } catch (erro: any) {
    throw new Error(erro.response.data.mensagem || 'Erro ao fazer login na API')
  }
}
