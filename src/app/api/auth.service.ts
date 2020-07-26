import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs';
import { UserDto } from './dtos/user/user.dto';
import { CreateUserDto } from "./dtos/user/create-user.dto";
import { LoginUserDto } from "./dtos/user/login-user.dto";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private readonly url = environment.apiUrl + '/auth';

  constructor(private httpClient: HttpClient) {
  }

  register(createUserDto: CreateUserDto): Observable<any> {
    return this.httpClient.post(this.url + '/register', createUserDto);
  }

  login(loginUserDto: LoginUserDto): Observable<UserDto> {
    return this.httpClient.post<UserDto>(this.url + '/login', loginUserDto);
  }

  logout() {
    localStorage.removeItem('user');
  }
}
