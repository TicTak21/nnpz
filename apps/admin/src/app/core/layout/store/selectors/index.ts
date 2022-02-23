import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromLayout from '../reducers';

export const selectLayoutState = createFeatureSelector<fromLayout.State>(
  fromLayout.layoutFeatureKey,
);

export const selectDrawerState = createSelector(
  selectLayoutState,
  fromLayout.selectDrawerOpened,
);
