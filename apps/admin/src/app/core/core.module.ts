import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { AdminFeatureAuthModule } from '@nnpz/admin/feature-auth';
import { AdminFeatureThemeModule } from '@nnpz/admin/feature-theme';
import { LayoutComponent } from './layout/containers/layout/layout.component';
import { LayoutModule } from './layout/layout.module';
import { StoreModule } from './store/store.module';

@NgModule({
  imports: [
    StoreModule,
    LayoutModule,
    HttpClientModule,
    AdminFeatureThemeModule,
    AdminFeatureAuthModule,
  ],
  exports: [LayoutComponent],
})
export class CoreModule {}
