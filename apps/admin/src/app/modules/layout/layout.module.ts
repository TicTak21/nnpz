import { LyCommonModule } from '@alyle/ui';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { LayoutComponent } from './containers/layout/layout.component';

@NgModule({
  declarations: [LayoutComponent],
  imports: [CommonModule, LyCommonModule],
  exports: [LayoutComponent],
})
export class LayoutModule {}
