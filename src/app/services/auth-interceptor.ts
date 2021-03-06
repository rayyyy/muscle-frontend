import { Injectable } from '@angular/core';
import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest } from '@angular/common/http';
import { AngularFireAuth } from '@angular/fire/auth';
import { Observable, from } from 'rxjs';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  constructor(
    private angularFireAuth: AngularFireAuth
  ) { }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return from(this.handleAccess(request, next));
  }

  private async handleAccess(req: HttpRequest<any>, next: HttpHandler):
    Promise<HttpEvent<any>> {
    if (req.url.startsWith('/auth')) {
      const token = await this.angularFireAuth.auth.currentUser.getIdToken();
      req = req.clone({ setHeaders: { Authorization: `Bearer ${token}` } });
    }
    return next.handle(req).toPromise()
  }
}