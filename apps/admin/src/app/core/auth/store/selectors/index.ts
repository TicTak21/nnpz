import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromAuth from '../reducers';

export const selectAuthState = createFeatureSelector<fromAuth.State>(
  fromAuth.authFeatureKey,
);

export const selectIsLogged = createSelector(
  selectAuthState,
  state => state.isLogged,
);
