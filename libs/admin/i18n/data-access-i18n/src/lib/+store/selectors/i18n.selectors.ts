import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromI18n from '../reducers/i18n.reducers';

export const selectI18nState = createFeatureSelector<fromI18n.State>(
  fromI18n.i18nFeatureKey,
);

export const selectCurrentLang = createSelector(
  selectI18nState,
  state => state.currentLang,
);

export const selectLangs = createSelector(
  selectI18nState,
  state => state.langs,
);
