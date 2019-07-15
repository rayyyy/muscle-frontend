import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable()
export class AuthService {
  // redirectUrl: string; // ログインしたときのページに戻ったりする時に使いたい
  private host: string = 'http://localhost:4200/api';

  constructor(
    private angularFireAuth: AngularFireAuth,
    private router: Router,
    private http: HttpClient
  ) { }

  async signUp(email: string, pass: string) {
    try {
      await this.angularFireAuth.auth.createUserWithEmailAndPassword(email, pass);
      this.setUser();
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
      console.log(await this.angularFireAuth.auth.currentUser.getIdToken())
      this.setUser();
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

  public get(): Promise<any[]> {
    return this.http.get(this.host + '/hello')
      .toPromise()
      .then((res) => {
        // response の型は any ではなく class で型を定義した方が良いが
        // ここでは簡便さから any としておく

        // @angular/http では json() でパースする必要があったが､ @angular/common/http では不要となった
        //const response: any = res.json();
        const response: any = res;
        return response;
      })
      .catch(this.errorHandler);
  }

  private errorHandler(err) {
    console.log('Error occured.', err);
    return Promise.reject(err.message || err);
  }

  // こいつの扱いをどうにかする。firebaseのuidなどを格納する用として使おうかな
  private setUser() {
    const user = { name: 'user' }
    localStorage.setItem('AUTH_USER', JSON.stringify(user));
  }
}
