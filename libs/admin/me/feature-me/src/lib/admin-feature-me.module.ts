import { LyButtonModule } from '@alyle/ui/button';
import { LyIconModule } from '@alyle/ui/icon';
import { LyTabsModule } from '@alyle/ui/tabs';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AdminUiMeModule } from '@nnpz/admin/ui-me';
import { AdminFeatureMePageComponent } from './me-page/me-page.component';

@NgModule({
  declarations: [AdminFeatureMePageComponent],
  imports: [
    CommonModule,
    AdminUiMeModule,
    LyTabsModule,
    LyIconModule,
    LyButtonModule,
    RouterModule.forChild([
      { path: '', component: AdminFeatureMePageComponent },
    ]),
  ],
})
export class AdminFeatureMeModule {}
