import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { AdminFeatureAuthModule } from '@nnpz/admin/feature-auth';
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
    AdminFeatureAuthModule,
  ],
  exports: [LayoutComponent],
})
export class CoreModule {}
