import { ActionReducer } from '@ngrx/store';
import * as fromLayout from '@nnpz/admin/app/core/layout/store';
import { localStorageSync } from 'ngrx-store-localstorage';

export const localStorageSyncReducer = (
  reducer: ActionReducer<unknown>,
): ActionReducer<unknown> => {
  return localStorageSync({
    keys: [fromLayout.layoutFeatureKey],
    rehydrate: true,
  })(reducer);
};
