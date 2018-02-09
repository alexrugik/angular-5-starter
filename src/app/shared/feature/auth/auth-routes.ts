import {RegistrationComponent} from '@app/shared/feature/auth/registration/registration.component';
import {LoginComponent} from '@app/shared/feature/auth/login/login.component';
import {UIView} from '@uirouter/angular';

export const AuthStates = {
  AUTH: 'auth',
  AUTH_REGISTRATION: 'auth.registration',
  AUTH_LOGIN: 'auth.login',
};

export const authState = {
  name: AuthStates.AUTH,
  url: '',
  component: UIView
};

const registrationState = {
  name: AuthStates.AUTH_REGISTRATION,
  url: '/registration',
  component: RegistrationComponent
};

export const loginState = {
  name: AuthStates.AUTH_LOGIN,
  url: '/login',
  component: LoginComponent
};

export const authStates = [
  authState,
  registrationState,
  loginState
];


