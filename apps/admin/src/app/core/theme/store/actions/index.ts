import { Dir } from '@alyle/ui';
import { createAction, props } from '@ngrx/store';
import { EThemes } from '@nnpz/ui';

export const toggleDirection = createAction(
  '[Theme] Toggle Direction',
  props<{ payload: { currentDirection: Dir } }>(),
);
export const toggleTheme = createAction(
  '[Theme]: Toggle theme',
  props<{ payload: { currentTheme: EThemes } }>(),
);
