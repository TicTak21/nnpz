import { createAction, props } from '@ngrx/store';
import { ELangs } from '@nnpz/shared/types';

export const setLang = createAction(
  '[i18n] Set language',
  props<{ payload: { newLang: ELangs } }>(),
);
