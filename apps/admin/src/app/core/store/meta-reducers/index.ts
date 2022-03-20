import { MetaReducer } from '@ngrx/store';
import { localStorageSyncReducer } from './local-storage.reducer';

export const metaReducers: MetaReducer[] = [localStorageSyncReducer];
