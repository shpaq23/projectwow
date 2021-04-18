import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { FailureDto } from 'src/app/api/dtos/failure.dto';
import { UserDto } from 'src/app/api/dtos/user/user.dto';
import { getLoggedUser, getLoggedUserError, getLoggedUserLoading } from 'src/app/store/selectors/user.selector';
import { UserState } from 'src/app/store/state/user.state';

@Injectable({
  providedIn: 'root'
})
export class UserRepository {
  constructor(private readonly userStore$: Store<UserState>) {
  }

  getUser(): Observable<UserDto> {
    return this.userStore$.select(getLoggedUser);
  }

  getUserError(): Observable<FailureDto> {
    return this.userStore$.select(getLoggedUserError);
  }

  getUserLoading(): Observable<boolean> {
    return this.userStore$.select(getLoggedUserLoading);
  }
}
