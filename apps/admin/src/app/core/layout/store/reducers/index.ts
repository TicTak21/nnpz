import { createReducer, on } from '@ngrx/store';
import * as layoutActions from '../actions';

export const layoutFeatureKey = 'layout';

export interface State {
  drawerOpened: boolean;
}

const initialState: State = {
  drawerOpened: true,
};

export const reducer = createReducer(
  initialState,
  on(layoutActions.toggleDrawer, state => ({
    drawerOpened: !state.drawerOpened,
  })),
);
