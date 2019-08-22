import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from 'src/app/interfaces/user';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { AuthService } from '../auth/auth.service';
import { Mentor } from 'src/app/interfaces/mentor';

@Injectable()
export class AuthUserService {

  constructor(
    private http: HttpClient,
    private authService: AuthService
  ) { }

  private getUserId() {
    return this.authService.getUserId()
  }

  private setUser(user: User) {
    this.authService.setUser(user)
  }

  // 認証済んでいるユーザーのためのものなのでauth-serviceに書いた
  getUser(): Observable<User> {
    return this.http.get<User>(`/user/${this.getUserId()}`)
      .pipe(
        tap(res => {
          this.setUser(res)
          return res
        })
      )
  }

  updateProfile(user: User): Observable<User> {
    return this.http.post<User>(`/auth/user/${this.getUserId()}`, user)
      .pipe(
        tap(res => {
          this.setUser(res)
          return res
        })
      )
  }

  updateMentor(mentor: Mentor): Observable<User> {
    return this.http.post<User>(`/auth/user/${this.getUserId()}/mentor-plan`, mentor)
      .pipe(
        tap(res => {
          this.setUser(res)
          return res
        })
      )
  }
}
