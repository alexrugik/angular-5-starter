import {STATES} from '@app/shared/consts/states';
import {HomeComponent} from '@app/home/home.component';
import {Ng2StateDeclaration} from '@uirouter/angular';
import {PageNotFoundComponent} from '@app/shared/feature/page-not-found/page-not-found.component';
import {MainComponent} from '@app/main/main.component';
import {AppComponent} from '@app/app.component';
import {AboutComponent} from '@app/about/about.component';

export const appState: Ng2StateDeclaration = {
  abstract: true,
  name: STATES.APP,
  url: '',
  component: AppComponent
};

export const mainState: Ng2StateDeclaration = {
  abstract: true,
  name: STATES.MAIN,
  url: '',
  component: MainComponent
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

export const pageNotFound: Ng2StateDeclaration = {
  name: STATES.PAGE_NOT_FOUND,
  url: 'page-not-found',
  component: PageNotFoundComponent
};


export const states: Ng2StateDeclaration[] = [
  appState,
  mainState,
  homeState,
  aboutState,
  pageNotFound
];