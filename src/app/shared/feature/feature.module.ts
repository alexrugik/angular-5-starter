import {NgModule} from '@angular/core';
import {HeaderComponent} from '@app/shared/feature/header/header.component';
import {PageNotFoundComponent} from '@app/shared/feature/page-not-found/page-not-found.component';
import {FooterComponent} from '@app/shared/feature/footer/footer.component';
import {RegistrationComponent} from './auth/registration/registration.component';
import {SignUpComponent} from './auth/sign-up/sign-up.component';
import {AppDependenciesModule} from '@app/app-dependencies.module';

@NgModule({
  declarations: [
    HeaderComponent,
    PageNotFoundComponent,
    FooterComponent,
    RegistrationComponent,
    SignUpComponent
  ],
  imports: [
    AppDependenciesModule,
  ],
  exports: [
    HeaderComponent,
    PageNotFoundComponent,
    FooterComponent
  ]
})
export class FeatureModule {
}
