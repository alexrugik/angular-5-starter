import {NgModule} from '@angular/core';
import {HeaderComponent} from '@app/shared/feature/header/header.component';
import {PageNotFoundComponent} from '@app/shared/feature/page-not-found/page-not-found.component';
import {FooterComponent} from '@app/shared/feature/footer/footer.component';
import {AppDependenciesModule} from '@app/app-dependencies.module';
import { SubHeaderComponent } from './sub-header/sub-header.component';

@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    PageNotFoundComponent,
    SubHeaderComponent,
  ],
  imports: [
    AppDependenciesModule,
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
    PageNotFoundComponent,
    SubHeaderComponent
  ]
})
export class FeatureModule {
}
