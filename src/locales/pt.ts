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
  members: 'Membros',
  additionalInfo: 'Informações adicionais',
}

const family = {
  contactDetails: 'Detalhes de Contato de {name}',
  noFamilyMembers: 'Nenhum membro da família encontrado',
}

const crud = {
  create: 'Cadastrar',
  edit: 'Editar',
  delete: 'Excluir',
}

const validation = {
  error: {
    requiredField: 'Os campos {fields} são obrigatórios | O Campo {fields} é obrigatório',
    invalidEmail: 'E-mail inválido',
    register: 'Erro ao cadastrar',
    'session.expired': 'Tempo de sessão expirado',
    'session.login_again': 'Por favor, efetue login novamente',
  },
  success: {
    success: 'Sucesso',
    register: 'Cadastrado com sucesso',
  },
}

const services = {
  food: 'Alimentação',
  health: 'Saúde',
  hygiene: 'Higiene',
  shelter: 'Moradia',
  education: 'Educação',
  punctuation: 'Pontuação',
}

const dates = {
  january: 'Janeiro',
  february: 'Fevereiro',
  march: 'Março',
  april: 'Abril',
  may: 'Maio',
  june: 'Junho',
  july: 'Julho',
  august: 'Agosto',
  september: 'Setembro',
  october: 'Outubro',
  november: 'Novembro',
  december: 'Dezembro',
}

const general = {
  home: 'Início',
  confirm: 'Confirmar',
  cancel: 'Cancelar',
}

export default {
  ...loginForm,
  ...entities,
  ...general,
  ...address,
  ...crud,
  ...validation,
  ...family,
  ...services,
  ...dates,
}
