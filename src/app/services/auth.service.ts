import { Injectable } from '@angular/core';

import { AngularFireAuth } from '@angular/fire/auth';
import * as firebase from 'firebase/app';
import { Router } from '@angular/router';

@Injectable()
export class AuthService {
  // redirectUrl: string; // ログインしたときのページに戻ったりする時に使いたい

  constructor(
    private angularFireAuth: AngularFireAuth,
    private router: Router
  ) { }

  isLoggedIn() {
    return true;
  }

  async signUp(email: string, pass: string) {
    try {
      await this.angularFireAuth.auth.createUserWithEmailAndPassword(email, pass);
      this.router.navigate(['/']);
    } catch (error) {
      if (error.code = 'auth/email-already-in-use') {
        // すでに使われている場合は、ログインに切り替える
        await this.angularFireAuth.auth.signInWithEmailAndPassword(email, pass);
        this.router.navigate(['/']);
      }
      console.log(error);
    }
  }
}
