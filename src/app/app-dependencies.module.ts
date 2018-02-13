import {NgModule} from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import {CommonModule} from '@angular/common';
import {UIRouterModule} from '@uirouter/angular';
import {FormsModule} from '@angular/forms';
import {SocialLoginModule} from 'ng4-social-login';

@NgModule({
  imports: [
    /* 3rd party libraries */
    SocialLoginModule,
    CommonModule,
    HttpClientModule,
    UIRouterModule,
    FormsModule,
  ],
  exports: [
    SocialLoginModule,
    CommonModule,
    HttpClientModule,
    UIRouterModule,
    FormsModule,
  ]
})
export class AppDependenciesModule {

}
