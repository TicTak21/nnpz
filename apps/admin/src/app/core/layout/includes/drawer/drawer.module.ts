import { LyDrawerModule } from '@alyle/ui/drawer';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { DrawerComponent } from './containers/drawer/drawer.component';

@NgModule({
  declarations: [DrawerComponent],
  imports: [CommonModule, LyDrawerModule],
  exports: [DrawerComponent],
})
export class DrawerModule {}
