import { LyGridModule } from '@alyle/ui/grid';
import { LyTypographyModule } from '@alyle/ui/typography';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { NnpzRegisterFormModule } from '@nnpz/ui';
import { RegisterPageComponent } from './containers/register-page/register-page.component';
import { RegisterRoutingModule } from './register-routing.module';

@NgModule({
  declarations: [RegisterPageComponent],
  imports: [
    CommonModule,
    RegisterRoutingModule,
    LyTypographyModule,
    NnpzRegisterFormModule,
    LyGridModule,
  ],
})
export class RegisterModule {}
