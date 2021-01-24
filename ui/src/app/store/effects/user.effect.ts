import { Injectable } from '@angular/core';
import { AuthService } from 'src/app/api/auth.service';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Observable, of } from 'rxjs';
import { Action, Store } from '@ngrx/store';
import {
  LoginUser,
  LoginUserFail,
  LoginUserSuccess, LogoutUserSuccess, StartLoadingUser, StopLoadingUser,
  UserActionsTypes
} from 'src/app/store/actions/user.action';
import { catchError, map, mergeMap, tap } from 'rxjs/operators';
import { Router } from '@angular/router';
import { UserState } from 'src/app/store/state/user.state';
import { HttpErrorResponse } from "@angular/common/http";

@Injectable()
export class UserEffect {

  constructor(private authService: AuthService,
              private actions$: Actions,
              private router: Router,
              private store: Store<UserState>) { }

  @Effect()
  loginUser: Observable<Action> = this.actions$.pipe(
    ofType(UserActionsTypes.LoginUser),
    map((action: LoginUser) => action.payload),
    mergeMap(payload => this.authService.login(payload).pipe(
      map(user => {
        localStorage.setItem('user', JSON.stringify(user));
        return new LoginUserSuccess(user);
      }),
      catchError((err: HttpErrorResponse) => {
        return of(new LoginUserFail(err.error))
      })
    )));

  @Effect()
  logoutUser: Observable<Action> = this.actions$.pipe(
    ofType(UserActionsTypes.LogoutUser),
    map(() => {
      this.authService.logout();
      return new LogoutUserSuccess();
    }));

  @Effect({ dispatch: false })
  startLoading$ = this.actions$.pipe(
    ofType(UserActionsTypes.LoginUser),
    tap(() => this.store.dispatch(new StartLoadingUser()))
  );

  @Effect({ dispatch: false })
  stopLoading$ = this.actions$.pipe(
    ofType(UserActionsTypes.LoginUserSuccess, UserActionsTypes.LoginUserFail),
    tap(() => this.store.dispatch(new StopLoadingUser()))
  );

  @Effect({ dispatch: false })
  redirectAfterLogin$ = this.actions$.pipe(
    ofType(UserActionsTypes.LoginUserSuccess),
    tap(() => this.router.navigate(['/game']))
  );

}
