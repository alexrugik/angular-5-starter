import {NgModule} from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import {CommonModule} from '@angular/common';
import {UIRouterModule} from '@uirouter/angular';
import {FormsModule} from '@angular/forms';
import {SocialLoginModule} from 'angular4-social-login';

@NgModule({
  imports: [
    /* 3rd party libraries */
    CommonModule,
    HttpClientModule,
    UIRouterModule,
    FormsModule,
    SocialLoginModule
  ],
  exports: [
    CommonModule,
    HttpClientModule,
    UIRouterModule,
    FormsModule,
    SocialLoginModule
  ]
})
export class AppDependenciesModule {

}
