import {STATES} from '@app/shared/consts/states';
import {HomeComponent} from '@app/home/home.component';
import {TestService} from '@app/core/test.service';
import {Ng2StateDeclaration} from '@uirouter/angular';

export const homeState: Ng2StateDeclaration = {
  name: STATES.APP_HOME,
  url: '/home',
  component: HomeComponent,
  onEnter(transition) {
    console.log('onEnter');
    const testService: TestService = transition.injector().get(TestService);
  }
};

export const homeStates = [homeState];
