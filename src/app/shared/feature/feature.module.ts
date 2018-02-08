import { NgModule } from '@angular/core';
import {HeaderComponent} from '@app/shared/feature/header/header.component';
import {PageNotFoundComponent} from '@app/shared/feature/page-not-found/page-not-found.component';
import {FooterComponent} from '@app/shared/feature/footer/footer.component';
import {CommonModule} from '@angular/common';
import {UIRouterModule} from '@uirouter/angular';
import {FormsModule} from '@angular/forms';

@NgModule({
  declarations: [
    HeaderComponent,
    PageNotFoundComponent,
    FooterComponent
  ],
  imports: [
    CommonModule,
    UIRouterModule,
    FormsModule
  ],
  exports: [
    HeaderComponent,
    PageNotFoundComponent,
    FooterComponent
  ]
})
export class FeatureModule { }
