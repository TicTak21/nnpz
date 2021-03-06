import { NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { StoreRouterConnectingModule } from '@ngrx/router-store';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { metaReducers } from '@nnpz/admin/feature-meta-reducers';
import { environment } from '@nnpz/admin/util-env';
import { ROOT_REDUCERS } from './+store/reducers/root.reducers';

@NgModule({
  imports: [
    StoreModule.forRoot(ROOT_REDUCERS, {
      metaReducers: metaReducers,
      runtimeChecks: {
        strictStateSerializability: true,
        strictActionSerializability: true,
        strictActionWithinNgZone: true,
        strictActionTypeUniqueness: true,
        strictActionImmutability: true,
        strictStateImmutability: true,
      },
    }),
    EffectsModule.forRoot(),
    StoreRouterConnectingModule.forRoot(),
    StoreDevtoolsModule.instrument({
      maxAge: environment.devToolsMaxAge,
      logOnly: environment.production,
    }),
  ],
})
export class AdminFeatureStoreModule {}
