import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { take } from 'rxjs/operators';
import { getLoggedUser } from 'src/app/store/selectors/user.selector';
import { UserState } from 'src/app/store/state/user.state';

@Injectable()
export class AuthTokenInterceptor implements HttpInterceptor {

  private token: string;

  constructor(private readonly userStore: Store<UserState>) {
  }

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    this.setToken();
    if (this.token) {
      request = request.clone({
        setHeaders: {
          Authorization: `bearer ${this.token}`
        }
      });
    }
    return next.handle(request);
  }


  private setToken(): void {
    this.userStore.pipe(
      select(getLoggedUser),
      take(1)
    ).subscribe(user => {
      this.token = user && user.accessToken;
    });
  }
}
