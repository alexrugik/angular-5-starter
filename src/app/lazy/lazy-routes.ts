import {STATES} from '@app/shared/consts/states';
import {LazyComponent} from '@app/lazy/lazy.component';


export const lazyState = {
  name: STATES.LAZY,
  url: '/child',
  component: LazyComponent
};

export const lazyStates = [lazyState];
