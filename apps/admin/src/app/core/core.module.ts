import { LY_THEME } from '@alyle/ui';
import { NgModule } from '@angular/core';
import { ThemeModule } from '@nnpz/ui';
import { StoreModule } from './store/store.module';
import { CustomMinimaDark } from './theme/custom-minima-dark.theme';

@NgModule({
  imports: [ThemeModule, StoreModule],
  providers: [{ provide: LY_THEME, useClass: CustomMinimaDark, multi: true }],
})
export class CoreModule {}
