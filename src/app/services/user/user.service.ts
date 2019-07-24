import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { UserDetail } from 'src/app/interfaces/user-detail';
import { User } from 'src/app/interfaces/user';

@Injectable()
export class UserService {
  private httpOptions: any = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };
  private host: string = 'http://localhost:4200/api';

  constructor(
    private http: HttpClient
  ) { }

  async getUser(user_id: number): Promise<User> {
    return this.http.get(`${this.host}/user/${user_id}`, this.httpOptions)
      .toPromise()
      .then((res) => {
        const response: any = res;
        console.log(response)
        return response;
      })
      .catch(this.errorHandler);
  }

  // TODO detailだけではなく userのnicknameやageも更新したい
  async updateProfile(user_id: number, user_detail: UserDetail): Promise<any[]> {
    return this.http.post(`${this.host}/user/${user_id}`, user_detail, this.httpOptions)
      .toPromise()
      .then((res) => {
        const response: any = res;
        console.log(response)
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
