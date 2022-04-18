import { LyTypographyModule } from '@alyle/ui/typography';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AdminFeatureToppingsPageComponent } from './toppings-page/toppings-page.component';

@NgModule({
  declarations: [AdminFeatureToppingsPageComponent],
  imports: [
    CommonModule,
    LyTypographyModule,
    RouterModule.forChild([
      { path: '', component: AdminFeatureToppingsPageComponent },
    ]),
  ],
})
export class AdminFeatureToppingsModule {}
