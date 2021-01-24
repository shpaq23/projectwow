import { initUserState, UserState } from 'src/app/store/state/user.state';
import { UserActions, UserActionsTypes } from 'src/app/store/actions/user.action';

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
        error: action.payload.message
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
