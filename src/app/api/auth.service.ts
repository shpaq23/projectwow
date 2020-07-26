import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { RegisterForm } from '../pw/ui/login-panel/register/register-panel.component';
import { Observable } from 'rxjs';
import { LoginForm } from '../pw/ui/login-panel/login/login-panel.component';
import { UserDto } from './dtos/user.dto';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private readonly url = environment.apiUrl + '/auth';

  constructor(private httpClient: HttpClient) {
  }

  register(registerForm: RegisterForm): Observable<any> {
    return this.httpClient.post(this.url + '/register', registerForm);
  }

  login(loginForm: LoginForm): Observable<UserDto> {
    return this.httpClient.post<UserDto>(this.url + '/login', loginForm);
  }

  logout() {
    localStorage.removeItem('user');
  }
}
