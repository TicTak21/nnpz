import { ActionReducer } from '@ngrx/store';
import { localStorageSync } from 'ngrx-store-localstorage';
import * as fromLayout from '../../layout/store/reducers';

export const localStorageSyncReducer = (
  reducer: ActionReducer<unknown>,
): ActionReducer<unknown> => {
  return localStorageSync({
    keys: [fromLayout.layoutFeatureKey],
    rehydrate: true,
  })(reducer);
};
