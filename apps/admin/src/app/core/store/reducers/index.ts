import { InjectionToken } from '@angular/core';
import * as fromRouter from '@ngrx/router-store';
import { Action, ActionReducerMap, MetaReducer } from '@ngrx/store';
import * as fromLayout from '@nnpz/admin/app/core/layout/store/reducers';
import * as fromTheme from '@nnpz/admin/app/core/theme/store/reducers';
import { localStorageSyncReducer } from './local-storage.reducer';

export interface State {
  [fromLayout.layoutFeatureKey]: fromLayout.State;
  [fromTheme.themeFeatureKey]: fromTheme.State;
  router: fromRouter.RouterReducerState;
}

export const metaReducers: MetaReducer[] = [localStorageSyncReducer];

export const ROOT_REDUCERS = new InjectionToken<
  ActionReducerMap<State, Action>
>('Root reducers token', {
  factory: () => ({
    [fromLayout.layoutFeatureKey]: fromLayout.reducer,
    [fromTheme.themeFeatureKey]: fromTheme.reducer,
    router: fromRouter.routerReducer,
  }),
});

export const { selectUrl } = fromRouter.getSelectors();
