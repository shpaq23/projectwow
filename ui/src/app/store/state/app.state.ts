import { UserState } from 'src/app/store/state/user.state';
import { CharacterState } from 'src/app/store/state/character.state';
import { GlobalLoaderState } from 'src/app/store/state/global-loader.state';

export interface AppState {
  loggedUser: UserState;
  character: CharacterState;
  globalLoader: GlobalLoaderState;
}
