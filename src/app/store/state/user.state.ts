import {User} from '../../api/services/auth.service';

export interface UserState {
  user: User;
  error: string;
  loading: boolean;
}
export const initUserState: UserState = {
  user: JSON.parse(localStorage.getItem('user')),
  error: '',
  loading: false
};
