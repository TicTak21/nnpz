import { LyTypographyModule } from '@alyle/ui/typography';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AdminFeatureLocationsPageComponent } from './locations-page/locations-page.component';

@NgModule({
  declarations: [AdminFeatureLocationsPageComponent],
  imports: [
    CommonModule,
    LyTypographyModule,
    RouterModule.forChild([
      { path: '', component: AdminFeatureLocationsPageComponent },
    ]),
  ],
})
export class AdminFeatureLocationsModule {}
