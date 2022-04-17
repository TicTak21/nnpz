import { LyCommonModule } from '@alyle/ui';
import { LyDrawerModule } from '@alyle/ui/drawer';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { AdminDataAccessLayoutModule } from '@nnpz/admin/data-access-layout';
import { AdminFeatureHeaderModule } from '@nnpz/admin/feature-header';
import { DrawerModule } from './components/drawer/drawer.module';
import { LayoutComponent } from './containers/layout/layout.component';

@NgModule({
  declarations: [LayoutComponent],
  imports: [
    CommonModule,
    LyCommonModule,
    LyDrawerModule,
    DrawerModule,
    AdminDataAccessLayoutModule,
    AdminFeatureHeaderModule,
  ],
  exports: [LayoutComponent],
})
export class LayoutModule {}
