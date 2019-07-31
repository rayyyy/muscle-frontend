import { Injectable } from '@angular/core';
import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable()
export class ErrorInterceptor implements HttpInterceptor {

  constructor() { }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const req = request.clone();
    return next.handle(req).pipe(
      catchError(res => {
        switch (res.status) {
          case 400:
          case 401:
          case 403:
          case 404:
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