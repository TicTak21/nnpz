import { LyGridModule } from '@alyle/ui/grid';
import { LyTypographyModule } from '@alyle/ui/typography';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { NnpzLoginFormModule } from '@nnpz/ui';
import { LoginPageComponent } from './containers/login-page/login-page.component';
import { LoginRoutingModule } from './login-routing.module';

@NgModule({
  declarations: [LoginPageComponent],
  imports: [
    CommonModule,
    LoginRoutingModule,
    LyTypographyModule,
    NnpzLoginFormModule,
    LyGridModule,
  ],
})
export class LoginModule {}
