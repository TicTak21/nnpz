import { LyAvatarModule } from '@alyle/ui/avatar';
import { LyButtonModule } from '@alyle/ui/button';
import { LyDividerModule } from '@alyle/ui/divider';
import { LyDrawerModule } from '@alyle/ui/drawer';
import { LyGridModule } from '@alyle/ui/grid';
import { LyIconModule } from '@alyle/ui/icon';
import { LyListModule } from '@alyle/ui/list';
import { LyMenuModule } from '@alyle/ui/menu';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { DrawerDirBtnComponent } from './components/drawer-dir-btn/drawer-dir-btn.component';
import { DrawerLayoutBtnComponent } from './components/drawer-layout-btn/drawer-layout-btn.component';
import { DrawerLogoutBtnComponent } from './components/drawer-logout-btn/drawer-logout-btn.component';
import { DrawerMenuComponent } from './components/drawer-menu/drawer-menu.component';
import { DrawerComponent } from './containers/drawer/drawer.component';
import { IsLtrPipe } from './pipes/is-ltr.pipe';

@NgModule({
  declarations: [
    DrawerComponent,
    DrawerMenuComponent,
    DrawerDirBtnComponent,
    DrawerLogoutBtnComponent,
    IsLtrPipe,
    DrawerLayoutBtnComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    LyDrawerModule,
    LyListModule,
    LyButtonModule,
    LyDividerModule,
    LyIconModule,
    LyAvatarModule,
    LyGridModule,
    LyMenuModule,
  ],
  exports: [DrawerComponent],
})
export class DrawerModule {}
