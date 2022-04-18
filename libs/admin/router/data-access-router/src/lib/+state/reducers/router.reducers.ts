import * as fromRouter from '@ngrx/router-store';
import { RouterReducerState } from '@ngrx/router-store';

export const routerFeatureKey = 'router';

export type State = RouterReducerState;

export const reducer = fromRouter.routerReducer;
