import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {CoreModule} from '@app/core/core.module';
import {AppRoutingModule} from '@app/app-routing.module';
import {FeatureModule} from '@app/shared/feature/feature.module';
import {UIView} from '@uirouter/angular';

import {AppComponent} from './app.component';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    CoreModule,
    AppRoutingModule,
    FeatureModule
  ],
  bootstrap: [UIView]
})
export class AppModule {
}
