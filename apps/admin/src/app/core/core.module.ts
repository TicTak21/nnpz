import { NgModule } from '@angular/core';
import { UiModule } from '@nest-ng-pizza/ui';
import { StoreModule } from './store/store.module';

@NgModule({ imports: [UiModule, StoreModule] })
export class CoreModule {}
