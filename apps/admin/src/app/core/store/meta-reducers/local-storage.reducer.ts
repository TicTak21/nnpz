import { ActionReducer } from '@ngrx/store';
import { localStorageSync } from 'ngrx-store-localstorage';
import * as fromLayout from '../../../core/layout/store';
import * as fromTheme from '../../../core/theme/store';

export const localStorageSyncReducer = (
  reducer: ActionReducer<unknown>,
): ActionReducer<unknown> => {
  return localStorageSync({
    keys: [fromLayout.layoutFeatureKey, fromTheme.themeFeatureKey],
    rehydrate: true,
  })(reducer);
};
