import {STATES} from '@app/shared/consts/states';
import {
  Ng2StateDeclaration,
  UIView
} from '@uirouter/angular';

import {PageNotFoundComponent} from '@app/shared/feature/page-not-found/page-not-found.component';
import {AppComponent} from '@app/app.component';

export const appState: Ng2StateDeclaration = {
  abstract: true,
  name: STATES.APP,
  url: '',
  component: AppComponent
};

export const homeState: Ng2StateDeclaration = {
  name: STATES.APP_HOME_LOADING,
  url: '/home',
  loadChildren: './home/home.module#HomeModule'
};

export const aboutState: Ng2StateDeclaration = {
  name: STATES.APP_ABOUT_LOADING,
  url: '/about',
  loadChildren: './about/about.module#AboutModule'
};

export const lazyState: Ng2StateDeclaration = {
  name: STATES.APP_LAZY_LOADING,
  url: '/lazy',
  loadChildren: './lazy/lazy.module#LazyModule'
};

export const authState: Ng2StateDeclaration = {
  name: STATES.AUTH_LOADING,
  url: '/auth',
  loadChildren: './shared/feature/auth/auth.module#AuthModule'
};

export const pageNotFoundState: Ng2StateDeclaration = {
  name: STATES.PAGE_NOT_FOUND,
  url: '/page-not-found',
  component: PageNotFoundComponent
};

export const states: Ng2StateDeclaration[] = [
  appState,
  homeState,
  aboutState,
  lazyState,
  pageNotFoundState,
  authState
];
