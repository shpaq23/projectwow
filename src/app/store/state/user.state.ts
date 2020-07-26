import {UserDto} from '../../api/dtos/user/user.dto';

export interface UserState {
  user: UserDto;
  error: string;
  loading: boolean;
}

export const initUserState: UserState = {
  user: JSON.parse(localStorage.getItem('user')),
  error: '',
  loading: false
};
