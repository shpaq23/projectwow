import { Action, createReducer, on } from '@ngrx/store';
import { loginUser, loginUserFail, loginUserSuccess, logoutUserSuccess } from 'src/app/store/actions/user.action';
import { initUserState, UserState } from 'src/app/store/state/user.state';

export const userFeatureKey = 'logged-user';

const reducer = createReducer(
  initUserState,
  on(loginUserSuccess,
    (state, { payload }) => ({
      ...state,
      user: payload,
      error: null,
      loading: false
    })),
  on(loginUserFail,
    (state, { payload }) => ({
      ...state,
      error: payload,
      loading: false
    })),
  on(logoutUserSuccess,
    () => ({
      user: null,
      error: null,
      loading: false
    })),
  on(loginUser,
    (state) => ({
      ...state,
      loading: true
    }))
);

export function userReducer(state, action: Action): UserState {
  return reducer(state, action);
}
