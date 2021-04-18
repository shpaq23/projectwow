import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { take } from 'rxjs/operators';
import { UserRepository } from 'src/app/store/repositories/user.repository';

@Injectable()
export class AuthTokenInterceptor implements HttpInterceptor {

  private token: string;

  constructor(private readonly userRepository: UserRepository) {
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
    this.userRepository.getUser()
      .pipe(
        take(1)
      ).subscribe(user => {
        this.token = user && user.accessToken;
    });
  }
}
