import { createFeature, createReducer, on } from '@ngrx/store';
import * as authActions from '../actions/auth.actions';

export const authFeatureKey = 'auth';

export interface State {
  isLogged: boolean;
}

export const initialState: State = {
  isLogged: true,
};

export const authFeature = createFeature({
  name: authFeatureKey,
  reducer: createReducer(
    initialState,
    on(authActions.login, state => ({ ...state, isLogged: true })),
    on(authActions.logout, state => ({ ...state, isLogged: false })),
  ),
});

export const { selectAuthState, selectIsLogged } = authFeature;
