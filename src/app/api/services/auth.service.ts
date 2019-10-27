import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import {RegisterForm} from '../../pw/login-panel/register/register-panel.component';
import {Observable, of, throwError, timer} from 'rxjs';
import {delay, mergeMap} from 'rxjs/operators';
import {LoginForm} from '../../pw/login-panel/login/login-panel.component';

export interface User {
  token: string;
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  url = environment.apiUrl + '/authorization';
  delay = 1500;
  constructor(private httpClient: HttpClient) { }

  register(registerForm: RegisterForm): Observable<any> {
    // return this.httpClient.post(this.url + '/register', registerForm);
    // return of({data: 'success'})
    //   .pipe(delay(this.delay));
    return timer(this.delay).pipe(mergeMap(() => throwError('External Server Error')));
  }
  login(loginForm: LoginForm): Observable<User> {
    // return this.httpClient.post<User>(this.url + '/login', loginForm);
    // return of({token: '0192830921893012830128390192873123091823'})
    //   .pipe(delay(this.delay));
    return timer(this.delay).pipe(mergeMap(() => throwError('Wrong E-mail or Password')));
  }
  logout() {
    localStorage.removeItem('user');
  }
}
