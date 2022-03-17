import { Dir } from '@alyle/ui';
import { createReducer, on } from '@ngrx/store';
import * as layoutActions from '../actions';

export const layoutFeatureKey = 'layout';

export interface State {
  drawerOpened: boolean;
  direction: Dir;
}

const initialState: State = {
  drawerOpened: true,
  direction: Dir.ltr,
};

export const reducer = createReducer(
  initialState,
  on(layoutActions.toggleDirection, state => ({
    ...state,
    direction: state.direction === Dir.ltr ? Dir.rtl : Dir.ltr,
  })),
  on(layoutActions.toggleDrawer, state => ({
    ...state,
    drawerOpened: !state.drawerOpened,
  })),
);
