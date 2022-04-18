import { LyCommonModule } from '@alyle/ui';
import { NgModule } from '@angular/core';
import { AdminDataAccessLayoutModule } from '@nnpz/admin/data-access-layout';
import { AdminFeatureDrawerModule } from '@nnpz/admin/feature-drawer';
import { AdminFeatureHeaderModule } from '@nnpz/admin/feature-header';
import { AdminFeatureLayoutComponent } from './layout/layout.component';

const COMPONENTS = [AdminFeatureLayoutComponent];

@NgModule({
  declarations: [COMPONENTS],
  imports: [
    AdminDataAccessLayoutModule,
    AdminFeatureHeaderModule,
    AdminFeatureDrawerModule,
    LyCommonModule,
  ],
  exports: [COMPONENTS],
})
export class AdminFeatureLayoutModule {}
