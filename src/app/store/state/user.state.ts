import {UserResponse} from '../../services/api/structure-responses/user.response';

export interface UserState {
  user: UserResponse;
  error: string;
  loading: boolean;
}

export const initUserState: UserState = {
  user: JSON.parse(localStorage.getItem('user')),
  error: '',
  loading: false
};
