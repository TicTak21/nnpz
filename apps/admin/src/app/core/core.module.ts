import { NgModule } from '@angular/core';
import { HeaderComponent } from './header/containers/header/header.component';
import { HeaderModule } from './header/header.module';
import { LayoutComponent } from './layout/containers/layout/layout.component';
import { LayoutModule } from './layout/layout.module';
import { StoreModule } from './store/store.module';
import { ThemeModule } from './theme/theme.module';

@NgModule({
  imports: [StoreModule, ThemeModule, HeaderModule, LayoutModule],
  exports: [HeaderComponent, LayoutComponent],
})
export class CoreModule {}
