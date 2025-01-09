import api from './axiosInstance'

export async function auth(username: string, password: string) {
  try {
    const response = await api.post('/login', { username, password })
    return response.data || response
  } catch (erro: any) {
    throw new Error(erro.response.data.mensagem || 'Erro ao fazer login na API')
  }
}
