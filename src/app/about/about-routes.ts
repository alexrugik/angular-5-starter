import {STATES} from '@app/shared/consts/states';
import {AboutComponent} from '@app/about/about.component';

export const aboutState = {
  name: STATES.APP_ABOUT,
  url: '/about',
  component: AboutComponent
};

export const aboutStates = [
  aboutState
];
