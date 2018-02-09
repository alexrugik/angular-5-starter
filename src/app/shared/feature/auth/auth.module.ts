import {NgModule} from '@angular/core';
import {UIRouterModule} from '@uirouter/angular';
import {RegistrationComponent} from '@app/shared/feature/auth/registration/registration.component';
import {LoginComponent} from './login/login.component';
import {authStates} from '@app/shared/feature/auth/auth-routes';
import { AuthComponent } from './auth/auth.component';

@NgModule({
  imports: [
    UIRouterModule.forChild({
      states: authStates
    })
  ],
  declarations: [
    RegistrationComponent,
    LoginComponent,
    AuthComponent
  ]
})
export class AuthModule {
}
