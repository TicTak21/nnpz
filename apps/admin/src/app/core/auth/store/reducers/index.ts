import { createReducer, on } from '@ngrx/store';
import * as authActions from '../actions';

export const authFeatureKey = 'auth';

export interface State {
  isLogged: boolean;
}

export const initialState: State = {
  isLogged: true,
};

export const reducer = createReducer(
  initialState,
  on(authActions.login, state => ({ ...state, isLogged: true })),
  on(authActions.logout, state => ({ ...state, isLogged: false })),
);
