import { LyToolbarModule } from '@alyle/ui/toolbar';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { AdminUiHeaderModule } from '@nnpz/admin/ui-header';
import { AdminUiThemeModule } from '@nnpz/admin/ui-theme';
import { NnpzAvatarModule } from '@nnpz/shared/ui';
import { AdminFeatureHeaderComponent } from './header/header.component';

const COMPONENST = [AdminFeatureHeaderComponent];

@NgModule({
  declarations: [COMPONENST],
  imports: [
    CommonModule,
    AdminUiHeaderModule,
    AdminUiThemeModule,
    NnpzAvatarModule,
    LyToolbarModule,
  ],
  exports: [COMPONENST],
})
export class AdminFeatureHeaderModule {}
