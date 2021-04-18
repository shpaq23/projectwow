import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, map, mergeMap, tap } from 'rxjs/operators';
import { AuthService } from 'src/app/api/auth.service';
import { FailureDto } from 'src/app/api/dtos/failure.dto';
import {
  loginUser,
  loginUserFail,
  loginUserSuccess,
  logoutUser,
  logoutUserSuccess
} from 'src/app/store/actions/user.action';

@Injectable()
export class UserEffect {

  loginUser$ = createEffect(() =>
    this.actions$.pipe(
      ofType(loginUser),
      map(action => action.payload),
      mergeMap(payload => this.authService.login(payload).pipe(
        map(user => {
          localStorage.setItem('user', JSON.stringify(user));
          return loginUserSuccess({ payload: user });
        }),
        catchError((err: FailureDto) => {
          return of(loginUserFail({ payload: err }));
        })
      )))
  );

  logoutUser$ = createEffect(() =>
    this.actions$.pipe(
      ofType(logoutUser),
      map(() => {
        this.authService.logout();
        return logoutUserSuccess();
      }))
  );

  redirectAfterLogin$ = createEffect(() =>
    this.actions$.pipe(
      ofType(loginUserSuccess),
      tap(() => this.router.navigate(['/game']))
    ), { dispatch: false });

  redirectAfterLogout$ = createEffect(() =>
    this.actions$.pipe(
      ofType(logoutUserSuccess),
      tap(() => this.router.navigate(['/login']))
    ), { dispatch: false });


  constructor(private readonly authService: AuthService,
              private readonly actions$: Actions,
              private readonly router: Router) {
  }

}
