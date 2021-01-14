import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { CreateUserDto } from 'src/app/api/dtos/user/create-user.dto';
import { LoginUserDto } from 'src/app/api/dtos/user/login-user.dto';
import { UserDto } from 'src/app/api/dtos/user/user.dto';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private delay = 3500;

  private readonly url = environment.apiUrl + '/auth';

  constructor(private httpClient: HttpClient) {
  }

  register(createUserDto: CreateUserDto): Observable<void> {
    return this.httpClient.post(this.url + '/register', createUserDto)
      .pipe(map(() => null));
  }

  login(loginUserDto: LoginUserDto): Observable<UserDto> {
    return this.httpClient.post<UserDto>(this.url + '/login', loginUserDto);
    // return of({accessToken: 'asdasdada'}).pipe(
    //   delay(this.delay)
    // );
  }

  logout() {
    localStorage.removeItem('user');
  }
}
