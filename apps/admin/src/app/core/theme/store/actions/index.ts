import { createAction, props } from '@ngrx/store';
import { EThemes } from '@nnpz/ui';

export const toggleTheme = createAction(
  '[Theme]: Toggle theme',
  props<{ payload: { currentTheme: EThemes } }>(),
);
