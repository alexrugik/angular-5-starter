import {Component} from '@angular/core';
import {HeaderConfig} from '@app/shared/declarations/header-config.declaration';
import {STATES} from '@app/shared/consts/states';
import {AUTH_STATES} from '@app/shared/feature/auth/auth-routes';

export const headerConfig: HeaderConfig = {
  title: 'Angular Starter',
  navItems: [
    {
      title: 'Home',
      stateName: STATES.APP_HOME,
      stateParams: {},
    },
    {
      title: 'About',
      stateName: STATES.APP_ABOUT,
      stateParams: {},
    },
    {
      title: 'Lazy Loading Module',
      stateName: STATES.APP_LAZY,
      stateParams: {},
    },
    {
      title: 'test',
      stateName: AUTH_STATES.AUTH_LOGIN,
      stateParams: {},
    }
  ]
};

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  headerConfig: HeaderConfig = headerConfig;
}
