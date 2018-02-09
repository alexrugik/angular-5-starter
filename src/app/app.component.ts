import {Component} from '@angular/core';

import {HeaderConfig} from '@app/shared/declarations/header-config.declaration';
import {STATES} from '@app/shared/consts/states';

export const headerConfig: HeaderConfig = {
  title: 'Angular Starter',
  navItems: [
    {
      title: 'Home',
      stateName: STATES.HOME,
      stateParams: {},
    },
    {
      title: 'About',
      stateName: STATES.ABOUT,
      stateParams: {},
    },
    {
      title: 'Lazy Loading Module',
      stateName: 'app.lazy',
      stateParams: {},
    },
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
