import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromTheme from '../reducers';

export const selectThemeState = createFeatureSelector<fromTheme.State>(
  fromTheme.themeFeatureKey,
);

export const selectIsLtr = createSelector(
  selectThemeState,
  state => state.isLtr,
);

export const selectDirection = createSelector(
  selectThemeState,
  state => state.direction,
);
