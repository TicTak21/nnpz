import { InjectionToken } from '@angular/core';
import { Action, ActionReducerMap } from '@ngrx/store';
import * as fromAuth from '@nnpz/admin/app/core/auth/store/reducers';
import * as fromLayout from '@nnpz/admin/app/core/layout/store/reducers';
import * as fromRouter from '@nnpz/admin/app/core/router/store';
import * as fromTheme from '@nnpz/admin/app/core/theme/store/reducers';

export interface State {
  [fromLayout.layoutFeatureKey]: fromLayout.State;
  [fromTheme.themeFeatureKey]: fromTheme.State;
  [fromAuth.authFeatureKey]: fromAuth.State;
  [fromRouter.routerFeatureKey]: fromRouter.State;
}

export const ROOT_REDUCERS = new InjectionToken<
  ActionReducerMap<State, Action>
>('ROOT_REDUCERS_TOKEN', {
  factory: () => ({
    [fromLayout.layoutFeatureKey]: fromLayout.reducer,
    [fromTheme.themeFeatureKey]: fromTheme.reducer,
    [fromRouter.routerFeatureKey]: fromRouter.reducer,
    [fromAuth.authFeatureKey]: fromAuth.reducer,
  }),
});
