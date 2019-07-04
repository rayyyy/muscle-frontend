import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';

@Injectable()
export class AuthService {
  // redirectUrl: string; // ログインしたときのページに戻ったりする時に使いたい

  constructor(
    private angularFireAuth: AngularFireAuth,
    private router: Router
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
      this.setUser();
      this.router.navigate(['/']);
    } catch (error) {
      console.log(error);
    }
  }

  async signOut() {
    this.angularFireAuth.auth.signOut().then(function () {
      localStorage.removeItem('AUTH_USER');
    }).catch(function (error) {
      console.log(error);
    });
  }

  private setUser() {
    const user = { name: 'user' }
    localStorage.setItem('AUTH_USER', JSON.stringify(user));
  }
}
