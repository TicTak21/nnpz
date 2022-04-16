import { LyDividerModule } from '@alyle/ui/divider';
import { LyGridModule } from '@alyle/ui/grid';
import { LyListModule } from '@alyle/ui/list';
import { LyTypographyModule } from '@alyle/ui/typography';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AdminUiSettingsModule } from '@nnpz/admin/ui-settings';
import { AdminUiSettingsPageComponent } from './settings-page/settings-page.component';

@NgModule({
  declarations: [AdminUiSettingsPageComponent],
  imports: [
    CommonModule,
    AdminUiSettingsModule,
    LyGridModule,
    LyListModule,
    LyTypographyModule,
    LyDividerModule,
    RouterModule.forChild([
      { path: '', component: AdminUiSettingsPageComponent },
    ]),
  ],
})
export class AdminFeatureSettingsModule {}
