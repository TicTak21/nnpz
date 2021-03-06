import { Dir } from '@alyle/ui';
import { createFeature, createReducer, on } from '@ngrx/store';
import { ELayoutType } from '@nnpz/admin/util-layout';
import * as layoutActions from '../actions/layout.actions';

export const layoutFeatureKey = 'layout';

export interface State {
  drawerOpened: boolean;
  direction: Dir;
  layoutType: ELayoutType;
}

const initialState: State = {
  drawerOpened: true,
  direction: Dir.ltr,
  layoutType: ELayoutType.standard,
};

export const layoutFeature = createFeature({
  name: layoutFeatureKey,
  reducer: createReducer(
    initialState,
    on(layoutActions.toggleDirection, state => ({
      ...state,
      direction: state.direction === Dir.ltr ? Dir.rtl : Dir.ltr,
    })),
    on(layoutActions.toggleDrawer, state => ({
      ...state,
      drawerOpened: !state.drawerOpened,
    })),
    on(layoutActions.changeLayout, (state, action) => ({
      ...state,
      layoutType: action.payload.layoutType,
    })),
  ),
});

export const {
  selectLayoutState,
  selectDrawerOpened,
  selectDirection,
  selectLayoutType,
} = layoutFeature;
