import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from 'src/app/interfaces/user';
import { AuthService } from 'src/app/services/auth/auth.service';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

@Injectable()
export class UserService {

  constructor(
    private http: HttpClient,
    private authService: AuthService
  ) { }

  getUser(user_id: number): Observable<User> {
    return this.http.get<User>(`/user/${user_id}`)
      .pipe(
        tap(res => {
          this.authService.setUser(res)
          return res
        })
      )
  }

  updateProfile(user_id: number, user: User): Observable<User> {
    return this.http.post<User>(`/auth/user/${user_id}`, user)
      .pipe(
        tap(res => {
          this.authService.setUser(res)
          return res
        })
      )
  }
}
