import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { LayoutComponent } from './layout/containers/layout/layout.component';
import { LayoutModule } from './layout/layout.module';
import { StoreModule } from './store/store.module';
import { ThemeModule } from './theme/theme.module';

@NgModule({
  imports: [
    StoreModule,
    ThemeModule,
    LayoutModule,
    HttpClientModule,
    RouterModule,
  ],
  exports: [LayoutComponent],
})
export class CoreModule {}
