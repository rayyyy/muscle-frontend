import { Injectable } from '@angular/core';
import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { AuthService } from './auth/auth.service';

@Injectable()
export class ErrorInterceptor implements HttpInterceptor {

  constructor(
    private authService: AuthService
  ) { }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const req = request.clone();
    return next.handle(req).pipe(
      catchError(res => {
        switch (res.status) {
          case 401:
            this.authService.signOut()
            break
          case 400:
          case 403:
          case 404:
          case 422:
          case 500:
            // TODO: ここでエラー表示する
            console.log(res.error)
            break;
          default:
            break;
        }
        return throwError(res);
      })
    );
  }
}