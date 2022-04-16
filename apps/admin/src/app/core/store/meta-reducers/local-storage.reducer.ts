import { ActionReducer } from '@ngrx/store';
import { fromLayout } from '@nnpz/admin/data-access-layout';
import { fromTheme } from '@nnpz/admin/data-access-theme';
import { localStorageSync } from 'ngrx-store-localstorage';

export const localStorageSyncReducer = (
  reducer: ActionReducer<unknown>,
): ActionReducer<unknown> => {
  return localStorageSync({
    keys: [fromLayout.layoutFeatureKey, fromTheme.themeFeatureKey],
    rehydrate: true,
  })(reducer);
};
