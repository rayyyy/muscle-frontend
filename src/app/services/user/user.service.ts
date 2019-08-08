import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from 'src/app/interfaces/user';
import { Observable } from 'rxjs';

@Injectable()
export class UserService {

  constructor(
    private http: HttpClient
  ) { }

  getUser(user_id: number): Observable<User> {
    return this.http.get<User>(`/user/${user_id}`)
  }
}
