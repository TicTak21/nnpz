import { LyCommonModule } from '@alyle/ui';
import { LyDrawerModule } from '@alyle/ui/drawer';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { DrawerModule } from './components/drawer/drawer.module';
import { HeaderModule } from './components/header/header.module';
import { LayoutComponent } from './containers/layout/layout.component';
import * as fromLayout from './store';

@NgModule({
  declarations: [LayoutComponent],
  imports: [
    CommonModule,
    LyCommonModule,
    LyDrawerModule,
    HeaderModule,
    DrawerModule,
    StoreModule.forFeature(fromLayout.layoutFeatureKey, fromLayout.reducer),
    EffectsModule.forFeature([fromLayout.LayoutEffects]),
  ],
  exports: [LayoutComponent],
})
export class LayoutModule {}
