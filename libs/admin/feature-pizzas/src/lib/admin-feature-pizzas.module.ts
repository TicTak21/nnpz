import { LyTypographyModule } from '@alyle/ui/typography';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AdminFeaturePizzasPageComponent } from './pizzas-page/pizzas-page.component';

@NgModule({
  declarations: [AdminFeaturePizzasPageComponent],
  imports: [
    CommonModule,
    LyTypographyModule,
    RouterModule.forChild([
      { path: '', component: AdminFeaturePizzasPageComponent },
    ]),
  ],
})
export class AdminFeaturePizzasModule {}
