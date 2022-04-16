import { ActionReducer } from '@ngrx/store';
import { fromLayout } from '@nnpz/admin/data-access-layout';
import { localStorageSync } from 'ngrx-store-localstorage';
import * as fromTheme from '../../../core/theme/store';

export const localStorageSyncReducer = (
  reducer: ActionReducer<unknown>,
): ActionReducer<unknown> => {
  return localStorageSync({
    keys: [fromLayout.layoutFeatureKey, fromTheme.themeFeatureKey],
    rehydrate: true,
  })(reducer);
};
