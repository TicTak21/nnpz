import { createFeature, createReducer, on } from '@ngrx/store';
import { EThemes } from '@nnpz/shared/types';
import * as themeActions from '../actions/theme.actions';

export const themeFeatureKey = 'theme';

export interface State {
  themeMode: EThemes;
}

const initialState: State = {
  themeMode: EThemes.dark,
};

export const themeFeature = createFeature({
  name: themeFeatureKey,
  reducer: createReducer(
    initialState,
    on(themeActions.toggleTheme, state => ({
      ...state,
      themeMode:
        state.themeMode === EThemes.dark ? EThemes.light : EThemes.dark,
    })),
  ),
});

export const { selectThemeState, selectThemeMode } = themeFeature;
