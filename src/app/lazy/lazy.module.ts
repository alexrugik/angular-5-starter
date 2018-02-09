import {NgModule} from '@angular/core';
import {LazyComponent} from './lazy.component';
import {UIRouterModule} from '@uirouter/angular';
import {lazyStates} from '@app/lazy/lazy-routes';

@NgModule({
  imports: [
    UIRouterModule.forChild({
      states: lazyStates
    })
  ],
  declarations: [
    LazyComponent,
  ],
})
export class LazyModule {
}
