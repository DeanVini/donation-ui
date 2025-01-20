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

const general = {
  home: 'Home',
}

export default {
  ...loginForm,
  ...entities,
  ...general,
}
