import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromLayout from '../reducers';

export const selectLayoutState = createFeatureSelector<fromLayout.State>(
  fromLayout.layoutFeatureKey,
);

export const selectDrawerOpened = (state: fromLayout.State) =>
  state.drawerOpened;

export const selectDrawerState = createSelector(
  selectLayoutState,
  selectDrawerOpened,
);