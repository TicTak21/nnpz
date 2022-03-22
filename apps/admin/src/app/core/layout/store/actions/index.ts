import { createAction } from '@ngrx/store';

export const toggleDrawer = createAction('[Layout] Toggle Drawer');

export const initDirection = createAction('[Layout] Init direction');
export const toggleDirection = createAction('[Layout] Toggle Direction');
