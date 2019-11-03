import { initUserState, UserState } from '../state/user.state';
import { UserActions, UserActionsTypes } from '../actions/user.action';

export function userReducer(state = initUserState, action: UserActions): UserState {
  switch (action.type) {
    case UserActionsTypes.LoginUserSuccess:
      return {
        ...state,
        user: action.payload,
        error: ''
      };
    case UserActionsTypes.LoginUserFail:
      return {
        ...state,
        error: action.payload
      };
    case UserActionsTypes.LogoutUserSuccess:
      return {
        ...state,
        user: null,
        error: ''
      };
    case UserActionsTypes.StartLoadingUser:
      return {
        ...state,
        loading: true
      };
    case UserActionsTypes.StopLoadingUser:
      return {
        ...state,
        loading: false
      };
    default:
      return state;
  }
}
