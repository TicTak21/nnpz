import { NgModule } from '@angular/core';
import { StoreModule } from './store/store.module';
import { ThemeModule } from './theme/theme.module';

@NgModule({
  imports: [StoreModule, ThemeModule],
})
export class CoreModule {}
