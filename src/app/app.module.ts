import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {CoreModule} from '@app/core/core.module';
import {HomeComponent} from './home/home.component';
import {AppRoutingModule} from '@app/app-routing.module';
import {AboutComponent} from './about/about.component';
import {FeatureModule} from '@app/shared/feature/feature.module';
import {UIView} from '@uirouter/angular';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent
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
