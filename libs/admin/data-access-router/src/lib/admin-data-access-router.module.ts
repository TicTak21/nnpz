import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import * as fromRouter from './+state/reducers/router.reducers';

@NgModule({
  imports: [
    StoreModule.forFeature(fromRouter.routerFeatureKey, fromRouter.reducer),
  ],
})
export class AdminDataAccessRouterModule {}
