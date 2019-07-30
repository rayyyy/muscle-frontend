import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { User } from 'src/app/interfaces/user';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable()
export class AuthService {
  private host: string = 'http://localhost:4200/api';

  constructor(
    private angularFireAuth: AngularFireAuth,
    private router: Router,
    private http: HttpClient
  ) { }

  async signUp(email: string, pass: string) {
    try {
      await this.angularFireAuth.auth.createUserWithEmailAndPassword(email, pass);
      this.signInApi()
      this.router.navigate(['/']);
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
      this.signInApi()
      this.router.navigate(['/']);
    } catch (error) {
      console.log(error);
    }
  }

  async signOut() {
    this.angularFireAuth.auth.signOut().then(function () {
      localStorage.removeItem('LOGIN_USER')
      this.router.navigate(['/'])
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

  private signInApi() {
    const user = this.angularFireAuth.auth.currentUser;
    const params = {
      uid: user.uid,
      email: user.email
    };

    this.http.post<User>(this.host + '/sign-in', params)
      .subscribe(res => this.setUser(res))
  }

  // TODO これをインターセプターで定義する
  private errorHandler(err) {
    console.log('Error occured.', err);
    return Promise.reject(err.message || err);
  }
}
