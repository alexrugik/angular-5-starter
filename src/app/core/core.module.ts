/* 3rd party libraries */
import {
  NgModule,
  NgModuleFactoryLoader,
  Optional,
  SkipSelf,
  SystemJsNgModuleLoader
} from '@angular/core';

import {
  AuthServiceConfig,
  GoogleLoginProvider,
  FacebookLoginProvider,
  LinkedinLoginProvider
} from 'ng4-social-login';

import {TestService} from '@app/core/test.service';


const config = new AuthServiceConfig([
  {
    id: GoogleLoginProvider.PROVIDER_ID,
    provider: new GoogleLoginProvider('6155373716-qdamec0p9rmfh42eap61t2icfjfa1fb5.apps.googleusercontent.com')
  },
  {
    id: FacebookLoginProvider.PROVIDER_ID,
    provider: new FacebookLoginProvider('1991845311041561')
  },
  {
    id: LinkedinLoginProvider.PROVIDER_ID,
    provider: new LinkedinLoginProvider('771qfk0ybk6wc3')
  }
]);

export function provideConfig() {
  return config;
}

@NgModule({
  imports: [],
  declarations: [],
  providers: [
    TestService,
    {provide: AuthServiceConfig, useFactory: provideConfig},
    {provide: NgModuleFactoryLoader, useClass: SystemJsNgModuleLoader}
  ],
})
export class CoreModule {
  /* make sure CoreModule is imported only by one NgModule the AppModule */
  constructor(@Optional() @SkipSelf() parentModule: CoreModule) {
    if (parentModule) {
      throw new Error('CoreModule is already loaded. Import only in AppModule');
    }
  }
}
