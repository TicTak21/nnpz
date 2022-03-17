import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromLayout from '../reducers';

export const selectLayoutState = createFeatureSelector<fromLayout.State>(
  fromLayout.layoutFeatureKey,
);

export const selectDrawerOpened = createSelector(
  selectLayoutState,
  state => state.drawerOpened,
);

export const selectDirection = createSelector(
  selectLayoutState,
  state => state.direction,
);
