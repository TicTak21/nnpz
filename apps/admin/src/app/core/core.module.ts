import { NgModule } from '@angular/core';
import { ThemeModule } from '@nnpz/ui';
import { StoreModule } from './store/store.module';

@NgModule({ imports: [ThemeModule, StoreModule] })
export class CoreModule {}
