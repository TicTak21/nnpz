import { Dir } from '@alyle/ui';
import { createReducer, on } from '@ngrx/store';
import * as themeActions from '../actions';

export const themeFeatureKey = 'theme';

export interface State {
  direction: Dir;
  isLtr: boolean;
}

const initialState: State = {
  direction: Dir.ltr,
  isLtr: true,
};

export const reducer = createReducer(
  initialState,
  on(themeActions.toggleDirection, state => ({
    direction: state.direction === Dir.ltr ? Dir.rtl : Dir.rtl,
    isLtr: !state.isLtr,
  })),
);
