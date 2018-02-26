import {NgModule} from '@angular/core';
import {UIRouterModule} from '@uirouter/angular';
import {AboutComponent} from '@app/about/about.component';
import {aboutStates} from '@app/about/about.routes';

@NgModule({
  imports: [
    UIRouterModule.forChild({
      states: aboutStates
    })
  ],
  declarations: [
    AboutComponent
  ]
})
export class AboutModule {

}
