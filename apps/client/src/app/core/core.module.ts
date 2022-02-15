import { NgModule } from '@angular/core';
import { BaseThemeModule } from '@nnpz/ui';
import { StoreModule } from './store/store.module';

@NgModule({ imports: [BaseThemeModule, StoreModule] })
export class CoreModule {}
