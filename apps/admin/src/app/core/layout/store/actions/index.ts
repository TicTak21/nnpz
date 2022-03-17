import { Dir } from '@alyle/ui';
import { createAction, props } from '@ngrx/store';

export const toggleDrawer = createAction('[Layout] Toggle Drawer');
export const toggleDirection = createAction(
  '[Theme] Toggle Direction',
  props<{ payload: { currentDirection: Dir } }>(),
);
