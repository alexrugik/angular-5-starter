import {UIRouterModule} from '@uirouter/angular';
import {states} from '@app/app-routes';
import {NgModule} from '@angular/core';
import {uiRouterConfigFn} from '@app/app-routing.config';

@NgModule({
  imports: [
    UIRouterModule.forRoot({
      states,
      useHash: false,
      config: uiRouterConfigFn
    })
  ],
  exports: [UIRouterModule]
})
export class AppRoutingModule {
}
