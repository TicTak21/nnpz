import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromTheme from '../reducers/theme.reducers';

export const selectThemeState = createFeatureSelector<fromTheme.State>(
  fromTheme.themeFeatureKey,
);

export const selectThemeMode = createSelector(
  selectThemeState,
  state => state.themeMode,
);
