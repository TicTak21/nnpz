import { InjectionToken } from '@angular/core';
import { Action, ActionReducerMap } from '@ngrx/store';
import { fromRouter } from '@nnpz/admin/data-access-router';

export interface State {
  [fromRouter.routerFeatureKey]: fromRouter.State;
}

export const ROOT_REDUCERS = new InjectionToken<
  ActionReducerMap<State, Action>
>('ROOT_REDUCERS_TOKEN', {
  factory: () => ({
    [fromRouter.routerFeatureKey]: fromRouter.reducer,
  }),
});
