import { Injectable } from '@angular/core';

import { AngularFireAuth } from '@angular/fire/auth';
import * as firebase from 'firebase/app';

@Injectable()
export class AuthService {

  constructor(
    private angularFireAuth: AngularFireAuth
  ) { }

  isLoggedIn() {
    return true;
  }

  async signUp(email: string, pass: string) {
    try {
      const credential = await this.angularFireAuth.auth.createUserWithEmailAndPassword(email, pass);
    } catch (error) {
      if (error.code = 'auth/email-already-in-use') {
        // すでに使われている場合は、ログインに切り替える
        console.log('mailaddressが登録済み');
      }
      console.log(error);
    }
  }
}
