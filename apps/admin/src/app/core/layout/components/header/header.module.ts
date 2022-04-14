import { LyAvatarModule } from '@alyle/ui/avatar';
import { LyBadgeModule } from '@alyle/ui/badge';
import { LyButtonModule } from '@alyle/ui/button';
import { LyGridModule } from '@alyle/ui/grid';
import { LyIconModule } from '@alyle/ui/icon';
import { LyMenuModule } from '@alyle/ui/menu';
import { LyToolbarModule } from '@alyle/ui/toolbar';
import { LyTypographyModule } from '@alyle/ui/typography';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NnpzAvatarModule } from '@nnpz/shared/ui';
import { ThemeModule } from '../../../theme/theme.module';
import { HeaderMenuBtnComponent } from './components/header-menu-btn/header-menu-btn.component';
import { HeaderNotificationsComponent } from './components/header-notifications/header-notifications.component';
import { HeaderTitleComponent } from './components/header-title/header-title.component';
import { HeaderComponent } from './containers/header/header.component';

@NgModule({
  declarations: [
    HeaderComponent,
    HeaderTitleComponent,
    HeaderMenuBtnComponent,
    HeaderNotificationsComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    LyToolbarModule,
    LyTypographyModule,
    LyButtonModule,
    LyBadgeModule,
    LyIconModule,
    LyAvatarModule,
    LyMenuModule,
    LyGridModule,
    ThemeModule,
    NnpzAvatarModule,
  ],
  exports: [HeaderComponent],
})
export class HeaderModule {}
