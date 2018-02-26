import {NgModule} from '@angular/core';
import {UIRouterModule} from '@uirouter/angular';
import {HomeComponent} from '@app/home/home.component';
import {homeStates} from '@app/home/home.routes';
import {TestService} from '@app/core/test.service';

@NgModule({
  imports: [
    UIRouterModule.forChild({
      states: homeStates
    })
  ],
  declarations: [
    HomeComponent
  ]
})
export class HomeModule {

}
