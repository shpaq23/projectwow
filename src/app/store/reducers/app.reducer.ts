import { ActionReducerMap } from '@ngrx/store';
import { AppState } from '../state/app.state';
import { userReducer } from './user.reducer';
import { globalLoaderReducer } from './global-loader.reducer';
import { characterReducer } from './character.reducer';

export const appReducers: ActionReducerMap<AppState> = {
  loggedUser: userReducer,
  character: characterReducer,
  globalLoader: globalLoaderReducer
};
