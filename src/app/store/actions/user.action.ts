import {Action} from '@ngrx/store';
import {LoginForm} from '../../pw/login-panel/login/login-panel.component';
import {User} from '../../api/services/auth.service';

export enum UserActionsTypes {
  LoginUser = '[User] Login User',
  LoginUserSuccess = '[User] Login User Success',
  LoginUserFail = '[User] Login User Fail',

  LogoutUser = '[User] Logout User',
  LogoutUserSuccess = '[User] Logout User Success',

  StartLoadingUser = '[User] Start Loading',
  StopLoadingUser = '[User] Stop Loading'

}
export class LoginUser implements Action {
  public readonly type = UserActionsTypes.LoginUser;
  constructor(public payload: LoginForm) {}
}
export class LoginUserSuccess implements Action {
  public readonly type = UserActionsTypes.LoginUserSuccess;
  constructor(public payload: User) {}
}
export class LoginUserFail implements Action {
  public readonly type = UserActionsTypes.LoginUserFail;
  constructor(public payload: string) {}
}
export class LogoutUser implements Action {
  public readonly type = UserActionsTypes.LogoutUser;
}
export class LogoutUserSuccess implements Action {
  public readonly type = UserActionsTypes.LogoutUserSuccess;
}
export class StartLoadingUser implements Action {
  public readonly type = UserActionsTypes.StartLoadingUser;
}
export class StopLoadingUser implements Action {
  public readonly type = UserActionsTypes.StopLoadingUser;
}


export type UserActions = LoginUser | LoginUserSuccess | LoginUserFail
  | LogoutUser | LogoutUserSuccess | StartLoadingUser | StopLoadingUser;
