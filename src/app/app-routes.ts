import {STATES} from '@app/shared/consts/states';
import {HomeComponent} from '@app/home/home.component';
import {Ng2StateDeclaration, UIView} from '@uirouter/angular';
import {PageNotFoundComponent} from '@app/shared/feature/page-not-found/page-not-found.component';
import {AppComponent} from '@app/app.component';
import {AboutComponent} from '@app/about/about.component';
import {RegistrationComponent} from '@app/shared/feature/auth/registration/registration.component';
import {SignUpComponent} from '@app/shared/feature/auth/sign-up/sign-up.component';

export const appState: Ng2StateDeclaration = {
  abstract: true,
  name: STATES.APP,
  url: '',
  component: AppComponent
};

export const homeState: Ng2StateDeclaration = {
  name: STATES.HOME,
  url: '/home',
  component: HomeComponent,
};

export const aboutState: Ng2StateDeclaration = {
  name: STATES.ABOUT,
  url: '/about',
  component: AboutComponent,
};

export const lazyState: Ng2StateDeclaration = {
  name: STATES.LAZY_LOADING,
  url: '/lazy',
  loadChildren: './lazy/lazy.module#LazyModule'
};

export const pageNotFoundState: Ng2StateDeclaration = {
  name: STATES.PAGE_NOT_FOUND,
  url: '/page-not-found',
  component: PageNotFoundComponent
};

export const registrationState: Ng2StateDeclaration = {
  name: STATES.REGISTRATION,
  url: '/registration',
  component: RegistrationComponent
};

export const signUpState: Ng2StateDeclaration = {
  name: STATES.SIGN_UP,
  url: '/sign-up',
  component: SignUpComponent
};


export const states: Ng2StateDeclaration[] = [
  appState,
  homeState,
  aboutState,
  registrationState,
  signUpState,
  lazyState,
  pageNotFoundState
];
