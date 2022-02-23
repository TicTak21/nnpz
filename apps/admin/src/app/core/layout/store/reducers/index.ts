import { createReducer, on } from '@ngrx/store';
import * as LayoutActions from '../actions';

export const layoutFeatureKey = 'layout';

export interface State {
  drawerOpened: boolean;
}

const initialState: State = {
  drawerOpened: true,
};

export const reducer = createReducer(
  initialState,
  on(LayoutActions.toggleDrawer, state => ({
    drawerOpened: !state.drawerOpened,
  })),
);

export const selectDrawerOpened = (state: State) => state.drawerOpened;
