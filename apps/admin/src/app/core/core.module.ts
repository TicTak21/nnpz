import { NgModule } from '@angular/core';
import { LayoutComponent } from './layout/containers/layout/layout.component';
import { LayoutModule } from './layout/layout.module';
import { StoreModule } from './store/store.module';
import { ThemeModule } from './theme/theme.module';

@NgModule({
  imports: [StoreModule, ThemeModule, LayoutModule],
  exports: [LayoutComponent],
})
export class CoreModule {}
