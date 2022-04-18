import { createAction, props } from '@ngrx/store';
import { ELayoutType } from '@nnpz/admin/util-layout';

export const toggleDrawer = createAction('[Layout] Toggle Drawer');

export const initDirection = createAction('[Layout] Init direction');
export const toggleDirection = createAction('[Layout] Toggle Direction');

export const changeLayout = createAction(
  '[Layout] Change layout',
  props<{ payload: { layoutType: ELayoutType } }>(),
);
