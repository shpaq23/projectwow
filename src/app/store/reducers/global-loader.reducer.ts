import { GlobalLoaderState, initGlobalLoaderState } from '../state/global-loader.state';
import { GlobalLoaderActions, GlobalLoaderTypes } from '../actions/global-loader.action';

export function globalLoaderReducer(state = initGlobalLoaderState, action: GlobalLoaderActions): GlobalLoaderState {
  switch (action.type) {
    case GlobalLoaderTypes.StartLoading:
      return { loading: true };
    case GlobalLoaderTypes.StopLoading:
      return { loading: false };
    default:
      return state;
  }
}
