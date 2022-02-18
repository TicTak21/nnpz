import { LyCommonModule } from '@alyle/ui';
import { LyDrawerModule } from '@alyle/ui/drawer';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { LayoutComponent } from './containers/layout/layout.component';
import { DrawerModule } from './includes/drawer/drawer.module';
import { HeaderModule } from './includes/header/header.module';

@NgModule({
  declarations: [LayoutComponent],
  imports: [
    CommonModule,
    LyCommonModule,
    LyDrawerModule,
    HeaderModule,
    DrawerModule,
  ],
  exports: [LayoutComponent],
})
export class LayoutModule {}
