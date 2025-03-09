const loginForm = {
  emailOrUsername: 'Username',
  logInToCareOn: 'Log in to CareOn',
  invalidEmailOrUsername: 'Invalid e-mail or username',
  invalidCredentials: 'Invalid credentials',
  invalidPassword: 'Invalid password',
  invalidPasswordOrUsername: 'Invalid username or password',
  noInternetConnection: 'No internet connection',
  pageNotFound_title: 'Page Not Found',
  password: 'Password',
  projectManagement: 'Project management',
  serverConnectionFailed: 'Server connection failed',
  unknownError: 'Unknown error, try again later',
  useSingleSignOn: 'Use single sign-on',
  logIn: 'Log in',
  logInWithSSO: 'Log in with SSO',
  loginSuccess: 'Successfully logged in',
}

const entities = {
  people: 'People',
  addresses: 'Addresses',
  services: 'Services',
  families: 'Families',
  users: 'Users',
  person: 'Person',
  address: 'Address',
  service: 'Service',
  user: 'User',
  family: 'Family',
}

const address = {
  street: 'Street',
  postalCode: 'Postal Code',
  neighborhood: 'Neighborhood',
  city: 'City',
  state: 'State',
  number: 'Number',
  additionalInfo: 'Additional Infos',
}

const crud = {
  create: 'Add',
  edit: 'Edit',
  delete: 'Delete',
}

const validation = {
  error: {
    requiredField: 'The fields {fields} are required | The field {fields} is required',
    invalidEmail: 'Invalid email',
    register: 'Error while registering',
    'session.expired': 'Session expired',
    'session.login_again': 'Please log in again',
  },
  success: {
    success: 'Success',
    register: 'Successfully registered',
  },
}

const general = {
  home: 'Home',
  confirm: 'Confirm',
  cancel: 'Cancel',
}

export default {
  ...loginForm,
  ...entities,
  ...general,
  ...address,
  ...crud,
  ...validation,
}
