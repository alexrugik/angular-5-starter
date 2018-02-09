import {RegistrationComponent} from '@app/shared/feature/auth/registration/registration.component';
import {LoginComponent} from '@app/shared/feature/auth/login/login.component';
import {UIView} from '@uirouter/angular';

export const AUTH_STATES = {
  AUTH: 'auth',
  AUTH_REGISTRATION: 'auth.registration',
  AUTH_LOGIN: 'auth.login',
};

export const authState = {
  name: AUTH_STATES.AUTH,
  url: '/auth',
  component: UIView
};

const registrationState = {
  name: AUTH_STATES.AUTH_REGISTRATION,
  url: '/registration',
  component: RegistrationComponent
};

export const loginState = {
  name: AUTH_STATES.AUTH_LOGIN,
  url: '/login',
  component: LoginComponent
};

export const authStates = [
  authState,
  registrationState,
  loginState
];


