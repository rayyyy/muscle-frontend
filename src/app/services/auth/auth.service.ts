import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { User } from 'src/app/interfaces/user';

@Injectable()
export class AuthService {
  public user: User
  // redirectUrl: string; // ログインしたときのページに戻ったりする時に使いたい

  private httpOptions: any = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };
  private host: string = 'http://localhost:4200/api';

  constructor(
    private angularFireAuth: AngularFireAuth,
    private router: Router,
    private http: HttpClient
  ) {
    this.user = this.getUser()
  }

  async signUp(email: string, pass: string) {
    try {
      await this.angularFireAuth.auth.createUserWithEmailAndPassword(email, pass);
      this.setAuthorization(await this.angularFireAuth.auth.currentUser.getIdToken());
      this.signInApi();
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
      this.setAuthorization(await this.angularFireAuth.auth.currentUser.getIdToken());
      this.signInApi();
      this.router.navigate(['/']);
    } catch (error) {
      console.log(error);
    }
  }

  async signOut() {
    this.angularFireAuth.auth.signOut().then(function () {
      localStorage.removeItem('AUTH_USER');
      this.router.navigate(['/']);
    }.bind(this)).catch(function (error) {
      console.log(error);
    });
  }

  setUser(user: User) {
    localStorage.setItem('LOGIN_USER', JSON.stringify(user));
  }


  private getUser(): User {
    return JSON.parse(localStorage.getItem('LOGIN_USER')) || {}
  }

  private async signInApi(): Promise<any[]> {
    const user = await this.angularFireAuth.auth.currentUser;
    const params = {
      uid: user.uid,
      email: user.email
    };
    return this.http.post(this.host + '/sign-in', params, this.httpOptions)
      .toPromise()
      .then((res) => {
        const response: any = res;
        this.setUser(response);
        return response;
      })
      .catch(this.errorHandler);
  }

  private errorHandler(err) {
    console.log('Error occured.', err);
    return Promise.reject(err.message || err);
  }

  public setAuthorization(token: string): void {
    const bearerToken: string = `Bearer ${token}`;
    this.httpOptions.headers = this.httpOptions.headers.set('Authorization', bearerToken);
  }
}
