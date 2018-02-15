import {STATES} from '@app/shared/consts/states';
import {LazyComponent} from '@app/lazy/lazy.component';

export const lazyState = {
  name: STATES.APP_LAZY,
  url: '/lazy',
  component: LazyComponent
};

export const lazyStates = [lazyState];
