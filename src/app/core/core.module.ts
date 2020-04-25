import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './shared/footer/footer.component';
import { HeaderComponent } from './shared/header/header.component';
import { HeaderLoginComponent } from './shared/header/header-login/header-login.component';
import { HeaderLogoComponent } from './shared/header/header-logo/header-logo.component';

@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    HeaderLoginComponent,
    HeaderLogoComponent,
  ],
  exports: [
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    CommonModule
  ]
})
export class CoreModule { }
