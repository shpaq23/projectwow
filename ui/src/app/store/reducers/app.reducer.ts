import { ActionReducerMap } from '@ngrx/store';
import { AppState } from 'src/app/store/state/app.state';
import { userReducer } from 'src/app/store/reducers/user.reducer';
import { globalLoaderReducer } from 'src/app/store/reducers/global-loader.reducer';
import { characterReducer } from 'src/app/store/reducers/character.reducer';

export const appReducers: ActionReducerMap<AppState> = {
  loggedUser: userReducer,
  character: characterReducer,
  globalLoader: globalLoaderReducer
};
