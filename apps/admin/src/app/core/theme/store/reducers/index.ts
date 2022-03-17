import { createReducer, on } from '@ngrx/store';
import { EThemes } from '@nnpz/ui';
import * as themeActions from '../actions';

export const themeFeatureKey = 'theme';

export interface State {
  themeMode: EThemes;
}

const initialState: State = {
  themeMode: EThemes.dark,
};

export const reducer = createReducer(
  initialState,
  on(themeActions.toggleTheme, state => ({
    ...state,
    themeMode: state.themeMode === EThemes.dark ? EThemes.light : EThemes.dark,
  })),
);
