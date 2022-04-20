import { LyBadgeModule } from '@alyle/ui/badge';
import { LyButtonModule } from '@alyle/ui/button';
import { LyIconModule } from '@alyle/ui/icon';
import { LyMenuModule } from '@alyle/ui/menu';
import { LyTypographyModule } from '@alyle/ui/typography';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AdminUiHeaderMenuBtnComponent } from './header-menu-btn/header-menu-btn.component';
import { AdminUiHeaderNotificationsComponent } from './header-notifications/header-notifications.component';
import { AdminUiHeaderTitleComponent } from './header-title/header-title.component';
import { AdminUiHeaderTranslateBtnComponent } from './header-translate-btn/header-translate-btn.component';

const COMPONENTS = [
  AdminUiHeaderMenuBtnComponent,
  AdminUiHeaderNotificationsComponent,
  AdminUiHeaderTitleComponent,
  AdminUiHeaderTranslateBtnComponent,
];

@NgModule({
  declarations: [COMPONENTS],
  imports: [
    CommonModule,
    RouterModule,
    LyButtonModule,
    LyIconModule,
    LyMenuModule,
    LyBadgeModule,
    LyTypographyModule,
  ],
  exports: [COMPONENTS],
})
export class AdminUiHeaderModule {}
