import { LyAvatarModule } from '@alyle/ui/avatar';
import { LyButtonModule } from '@alyle/ui/button';
import { LyDividerModule } from '@alyle/ui/divider';
import { LyDrawerModule } from '@alyle/ui/drawer';
import { LyIconModule } from '@alyle/ui/icon';
import { LyListModule } from '@alyle/ui/list';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { DrawerMenuComponent } from './components/drawer-menu/drawer-menu.component';
import { DrawerComponent } from './containers/drawer/drawer.component';

@NgModule({
  declarations: [DrawerComponent, DrawerMenuComponent],
  imports: [
    CommonModule,
    RouterModule,
    LyDrawerModule,
    LyListModule,
    LyButtonModule,
    LyDividerModule,
    LyIconModule,
    LyAvatarModule,
  ],
  exports: [DrawerComponent],
})
export class DrawerModule {}
