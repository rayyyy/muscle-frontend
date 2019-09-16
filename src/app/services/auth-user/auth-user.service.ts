import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from 'src/app/interfaces/user';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { AuthService } from '../auth/auth.service';
import { Mentor } from 'src/app/interfaces/mentor';

@Injectable()
export class AuthUserService {
  constructor(private http: HttpClient, private authService: AuthService) {}

  private getUserId() {
    return this.authService.getUserId();
  }

  private setUser(user: User) {
    this.authService.setUser(user);
  }

  // 認証済んでいるユーザーのためのものなのでauth-serviceに書いた
  getUser(): Observable<User> {
    return this.http.get<User>(`/user/${this.getUserId()}`).pipe(
      tap(res => {
        this.setUser(res);
        return res;
      })
    );
  }

  updateProfile(user: User, icon: any = ''): Observable<User> {
    const params = {
      user: user,
      user_icon: icon
    };
    return this.http.post<User>(`/auth/user/${this.getUserId()}`, params).pipe(
      tap(res => {
        this.setUser(res);
        return res;
      })
    );
  }

  updateMentor(
    mentor: Mentor,
    image1: any = '',
    image2: any = '',
    image3: any = '',
    image4: any = ''
  ): Observable<User> {
    const params = {
      mentor: mentor,
      image1: image1,
      image2: image2,
      image3: image3,
      image4: image4
    };
    return this.http
      .post<User>(`/auth/user/${this.getUserId()}/mentor-plan`, params)
      .pipe(
        tap(res => {
          this.setUser(res);
          return res;
        })
      );
  }
}
