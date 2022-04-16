import { LyGridModule } from '@alyle/ui/grid';
import { LyTypographyModule } from '@alyle/ui/typography';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NnpzRegisterFormModule } from '@nnpz/shared/ui';
import { AdminFeatureRegisterPageComponent } from './register-page/register-page.component';

@NgModule({
  declarations: [AdminFeatureRegisterPageComponent],
  imports: [
    CommonModule,
    NnpzRegisterFormModule,
    LyTypographyModule,
    LyGridModule,
    RouterModule.forChild([
      { path: '', component: AdminFeatureRegisterPageComponent },
    ]),
  ],
})
export class AdminFeatureRegisterModule {}
