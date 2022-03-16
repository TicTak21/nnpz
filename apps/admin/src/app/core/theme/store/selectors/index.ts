import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromTheme from '../reducers';

export const selectThemeState = createFeatureSelector<fromTheme.State>(
  fromTheme.themeFeatureKey,
);

export const selectDirection = createSelector(
  selectThemeState,
  state => state.direction,
);

export const selectThemeMode = createSelector(
  selectThemeState,
  state => state.themeMode,
);
