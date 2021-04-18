import { Action, createReducer, on } from '@ngrx/store';
import { startLoader, stopLoader } from 'src/app/store/actions/global-loader.action';
import { GlobalLoaderState, initGlobalLoaderState } from 'src/app/store/state/global-loader.state';

export const globalLoaderFeatureKey = 'global-loader';

const reducer = createReducer(
  initGlobalLoaderState,
  on(startLoader, () => ({ loading: true })),
  on(stopLoader, () => ({ loading: false }))
);

export function globalLoaderReducer(state, action: Action): GlobalLoaderState {
  return reducer(state, action);
}
