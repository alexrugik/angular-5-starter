import {STATES} from '@app/shared/consts/states';
import {HomeComponent} from '@app/home/home.component';
import {Ng2StateDeclaration} from '@uirouter/angular';
import {PageNotFoundComponent} from '@app/shared/feature/page-not-found/page-not-found.component';
import {HeaderComponent} from '@app/shared/feature/header/header.component';
import {FooterComponent} from '@app/shared/feature/footer/footer.component';
import {MainComponent} from '@app/main/main.component';
import {AppComponent} from '@app/app.component';

export const appState = {
  abstract: true,
  name: STATES.APP,
  url: '',
  redirect: 'app.main.home',
  component: AppComponent
};

export const mainState = {
  abstract: true,
  name: STATES.MAIN,
  url: '',
  redirect: 'app.main.home',
  component: MainComponent
};

export const homeState = {
  name: STATES.HOME,
  url: '/home',
  views: {
    header: {component: HeaderComponent},
    content: {component: HomeComponent},
    footer: {component: FooterComponent}
  }
};

export const pageNotFound = {
  name: STATES.PAGE_NOT_FOUND,
  url: 'page-not-found',
  component: PageNotFoundComponent
};


export const states: Ng2StateDeclaration[] = [appState, mainState, homeState, pageNotFound];
