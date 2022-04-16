import { LyGridModule } from '@alyle/ui/grid';
import { LyTypographyModule } from '@alyle/ui/typography';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NnpzLoginFormModule } from '@nnpz/shared/ui';
import { AdminFeatureLoginPageComponent } from './login-page/login-page.component';

@NgModule({
  declarations: [AdminFeatureLoginPageComponent],
  imports: [
    CommonModule,
    NnpzLoginFormModule,
    LyTypographyModule,
    LyGridModule,
    RouterModule.forChild([
      { path: '', component: AdminFeatureLoginPageComponent },
    ]),
  ],
})
export class AdminFeatureLoginModule {}
