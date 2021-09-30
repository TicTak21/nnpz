import { NgModule } from '@angular/core';
import { UiModule } from '@nnpz/ui';
import { StoreModule } from './store/store.module';

@NgModule({ imports: [UiModule, StoreModule] })
export class CoreModule {}
