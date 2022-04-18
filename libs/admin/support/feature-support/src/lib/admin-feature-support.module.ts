import { LyCommonModule } from '@alyle/ui';
import { LyGridModule } from '@alyle/ui/grid';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AdminUiSupportModule } from '@nnpz/admin/ui-support';
import { AdminFeatureSupportPageComponent } from './support-page/support-page.component';

@NgModule({
  declarations: [AdminFeatureSupportPageComponent],
  imports: [
    CommonModule,
    AdminUiSupportModule,
    LyCommonModule,
    LyGridModule,
    RouterModule.forChild([
      { path: '', component: AdminFeatureSupportPageComponent },
    ]),
  ],
})
export class AdminFeatureSupportModule {}
