import { createFeature, createReducer, on } from '@ngrx/store';
import { ELangs } from '@nnpz/shared/types';
import * as i18nActions from '../actions/i18n.actions';

export const i18nFeatureKey = 'i18n';

export interface State {
  currentLang: ELangs;
  langs: ELangs[];
}

export const initialState: State = {
  currentLang: ELangs.english,
  langs: [ELangs.english, ELangs.spanish, ELangs.russian, ELangs.chinese],
};

export const i18nFeature = createFeature({
  name: i18nFeatureKey,
  reducer: createReducer(
    initialState,
    on(i18nActions.setLang, (state, { payload }) => ({
      ...state,
      currentLang: payload.newLang,
    })),
  ),
});

export const { selectCurrentLang, selectI18nState, selectLangs } = i18nFeature;
