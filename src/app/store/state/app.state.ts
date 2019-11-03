import { UserState } from './user.state';
import { CharacterState } from './character.state';
import { GlobalLoaderState } from './global-loader.state';

export interface AppState {
  loggedUser: UserState;
  character: CharacterState;
  globalLoader: GlobalLoaderState;
}
