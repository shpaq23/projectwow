import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { environment } from 'src/environments/environment';
import { CreateUserDto } from 'src/app/api/dtos/user/create-user.dto';
import { LoginUserDto } from 'src/app/api/dtos/user/login-user.dto';
import { UserDto } from 'src/app/api/dtos/user/user.dto';
import { delay } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private delay = 3500;

  private readonly url = environment.apiUrl + '/auth';

  constructor(private httpClient: HttpClient) {
  }

  register(createUserDto: CreateUserDto): Observable<any> {
    return this.httpClient.post(this.url + '/register', createUserDto);
  }

  login(loginUserDto: LoginUserDto): Observable<UserDto> {
    // return this.httpClient.post<UserDto>(this.url + '/login', loginUserDto);
    return of({accessToken: 'asdasdada'}).pipe(
      delay(this.delay)
    );
  }

  logout() {
    localStorage.removeItem('user');
  }
}
