import {STATES} from '@app/shared/consts/states';
import {HomeComponent} from '@app/home/home.component';

export const homeState = {
  name: STATES.APP_HOME,
  url: '/home',
  component: HomeComponent
};

export const homeStates = [homeState];
