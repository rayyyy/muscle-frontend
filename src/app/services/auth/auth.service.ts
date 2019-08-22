import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { User } from 'src/app/interfaces/user';
import { Observable } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { Mentor } from 'src/app/interfaces/mentor';

@Injectable()
export class AuthService {

  constructor(
    private angularFireAuth: AngularFireAuth,
    private router: Router,
    private http: HttpClient
  ) { }

  async signUp(email: string, pass: string) {
    try {
      await this.angularFireAuth.auth.createUserWithEmailAndPassword(email, pass);
      this.signInApi().subscribe(_res => {
        this.router.navigate(['/']);
      })
    } catch (error) {
      if (error.code = 'auth/email-already-in-use') {
        // すでに使われている場合は、ログインに切り替える
        this.signIn(email, pass);
      }
      console.log(error);
    }
  }

  async signIn(email: string, pass: string) {
    try {
      await this.angularFireAuth.auth.signInWithEmailAndPassword(email, pass);
      this.signInApi().subscribe(_res => {
        this.router.navigate(['/']);
      })
    } catch (error) {
      console.log(error);
    }
  }

  signOut() {
    this.angularFireAuth.auth.signOut().then(function () {
      localStorage.removeItem('LOGIN_USER')
      this.router.navigate(['/sign-in'])
    }.bind(this)).catch(function (error) {
      console.log(error)
    });
  }

  setUser(user: User) {
    localStorage.setItem('LOGIN_USER', JSON.stringify(user));
  }


  getUser(): User {
    return JSON.parse(localStorage.getItem('LOGIN_USER')) || {}
  }

  getUserId(): number {
    const user: User = JSON.parse(localStorage.getItem('LOGIN_USER')) || {}
    return user.id || 0
  }

  private signInApi(): Observable<User> {
    const user = this.angularFireAuth.auth.currentUser;
    const params = {
      uid: user.uid,
      email: user.email
    };

    return this.http.post<User>('/auth/sign-in', params)
      .pipe(
        tap(res => {
          this.setUser(res)
          return res
        }),
        catchError(err => {
          // APIでのsign-inが失敗した場合はfirebaseもサインアウトさせる
          this.signOut()
          throw err;
        })
      )
  }
}
