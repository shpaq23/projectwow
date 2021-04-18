import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { LoginUserDto } from 'src/app/api/dtos/user/login-user.dto';
import { loginUser, logoutUser } from 'src/app/store/actions/user.action';
import { UserState } from 'src/app/store/state/user.state';

@Injectable({
  providedIn: 'root'
})
export class UserCommands {

  constructor(private readonly userStore$: Store<UserState>) {
  }

  loginUser(loginUserDto: LoginUserDto): void {
    this.userStore$.dispatch(loginUser({ payload: loginUserDto }));
  }

  logoutUser(): void {
    this.userStore$.dispatch(logoutUser());
  }

}
