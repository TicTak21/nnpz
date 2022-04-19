import { LyButtonModule } from '@alyle/ui/button';
import { LyDividerModule } from '@alyle/ui/divider';
import { LyIconModule } from '@alyle/ui/icon';
import { LyListModule } from '@alyle/ui/list';
import { LyMenuModule } from '@alyle/ui/menu';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SharedUtilModule } from '@nnpz/shared/util';
import { AdminUiDrawerDirBtnComponent } from './drawer-dir-btn/drawer-dir-btn.component';
import { AdminUiDrawerLayoutBtnComponent } from './drawer-layout-btn/drawer-layout-btn.component';
import { AdminUiDrawerLogoutBtnComponent } from './drawer-logout-btn/drawer-logout-btn.component';
import { AdminUiDrawerMenuComponent } from './drawer-menu/drawer-menu.component';

const COMPONENTS = [
  AdminUiDrawerDirBtnComponent,
  AdminUiDrawerLayoutBtnComponent,
  AdminUiDrawerLogoutBtnComponent,
  AdminUiDrawerMenuComponent,
];

@NgModule({
  declarations: [COMPONENTS],
  imports: [
    CommonModule,
    RouterModule,
    LyButtonModule,
    LyIconModule,
    LyMenuModule,
    LyDividerModule,
    LyListModule,
    SharedUtilModule,
  ],
  exports: [COMPONENTS],
})
export class AdminUiDrawerModule {}
