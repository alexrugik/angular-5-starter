import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {CoreModule} from '@app/core/core.module';
import {HomeComponent} from './home/home.component';
import {AppRoutingModule} from '@app/app-routing.module';
import {MainComponent} from './main/main.component';
import {AboutComponent} from './about/about.component';
import {FeatureModule} from '@app/shared/feature/feature.module';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MainComponent,
    AboutComponent
  ],
  imports: [
    BrowserModule,
    CoreModule,
    AppRoutingModule,
    FeatureModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
