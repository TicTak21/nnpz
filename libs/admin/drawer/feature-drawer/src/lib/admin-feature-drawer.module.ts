import { LyDrawerModule } from '@alyle/ui/drawer';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { AdminUiDrawerModule } from '@nnpz/admin/ui-drawer';
import { AdminFeatureDrawerComponent } from './drawer/drawer.component';

const COMPONENTS = [AdminFeatureDrawerComponent];

@NgModule({
  declarations: [COMPONENTS],
  imports: [CommonModule, AdminUiDrawerModule, LyDrawerModule],
  exports: [COMPONENTS],
})
export class AdminFeatureDrawerModule {}
