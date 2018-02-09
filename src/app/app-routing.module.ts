import {UIRouter, UIRouterModule} from '@uirouter/angular';
import {states} from '@app/app-routes';
import {Injector, NgModule} from '@angular/core';
import {STATES} from '@app/shared/consts/states';

@NgModule({
  imports: [
    UIRouterModule.forRoot({
      states,
      useHash: false,
      config (router: UIRouter, injector: Injector) {
        router.urlService.rules.otherwise({state: STATES.PAGE_NOT_FOUND});
      }
    })
  ],
  exports: [UIRouterModule]
})
export class AppRoutingModule {
}
