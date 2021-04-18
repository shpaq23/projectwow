import { createAction, props } from '@ngrx/store';
import { FailureDto } from 'src/app/api/dtos/failure.dto';
import { LoginUserDto } from 'src/app/api/dtos/user/login-user.dto';
import { UserDto } from 'src/app/api/dtos/user/user.dto';

export const loginUser = createAction(
  '[User] Login User',
  props<{ payload: LoginUserDto }>()
);

export const loginUserSuccess = createAction(
  '[User] Login User Success',
  props<{ payload: UserDto }>()
);

export const loginUserFail = createAction(
  '[User] Login User Fail',
  props<{ payload: FailureDto }>()
);


export const logoutUser = createAction(
  '[User] Logout User'
);

export const logoutUserSuccess = createAction(
  '[User] Logout User Success'
);
