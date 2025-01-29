const loginForm = {
  emailOrUsername: 'Usuário',
  logInToCareOn: 'Entrar no careon',
  invalidEmailOrUsername: 'Nome de usuário inválido',
  invalidPassword: 'Senha inválida',
  invalidPasswordOrUsername: 'Usário ou senha inválidos',
  noInternetConnection: 'Sem conexão com a internet',
  pageNotFound_title: 'Página não encontrada',
  password: 'Senha',
  projectManagement: 'Gerenciamento de projetos',
  serverConnectionFailed: 'Falha na conexão com o servidor',
  unknownError: 'Erro desconhecido, tente novamente mais tarde',
  useSingleSignOn: 'Usar login único',
  logIn: 'Entrar',
  loginSuccess: 'Logado com sucesso',
}

const entities = {
  people: 'Pessoas',
  addresses: 'Endereços',
  services: 'Serviços',
  families: 'Famílias',
  users: 'Usuarios',
  person: 'Pessoa',
  address: 'Endereço',
  service: 'Serviço',
  user: 'Usuario',
  family: 'Familia',
}

const address = {
  street: 'Rua',
  postalCode: 'Cep',
  neighborhood: 'Bairro',
  city: 'Cidade',
  state: 'Estado',
  number: 'Numero',
  additionalInfo: 'Informações adicionais',
}

const general = {
  home: 'Início',
}

const crud = {
  create: 'Cadastrar',
  edit: 'Editar',
  delete: 'Excluir',
}

export default {
  ...loginForm,
  ...entities,
  ...general,
  ...address,
  ...crud,
}
