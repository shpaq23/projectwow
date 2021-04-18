import { FailureDto } from 'src/app/api/dtos/failure.dto';
import {UserDto} from 'src/app/api/dtos/user/user.dto';

export interface UserState {
  user: UserDto;
  error: FailureDto;
  loading: boolean;
}

export const initUserState: UserState = {
  user: JSON.parse(localStorage.getItem('user')),
  error: null,
  loading: false
};
