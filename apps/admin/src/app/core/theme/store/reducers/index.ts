import { Dir } from '@alyle/ui';
import { createReducer, on } from '@ngrx/store';
import { EThemes } from '@nnpz/ui';
import * as themeActions from '../actions';

export const themeFeatureKey = 'theme';

export interface State {
  direction: Dir;
  themeMode: EThemes;
}

const initialState: State = {
  direction: Dir.ltr,
  themeMode: EThemes.dark,
};

export const reducer = createReducer(
  initialState,
  on(themeActions.toggleDirection, state => ({
    ...state,
    direction: state.direction === Dir.ltr ? Dir.rtl : Dir.ltr,
  })),
  on(themeActions.toggleTheme, state => ({
    ...state,
    themeMode: state.themeMode === EThemes.dark ? EThemes.light : EThemes.dark,
  })),
);
