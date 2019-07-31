import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from 'src/app/interfaces/user';
import { AuthService } from 'src/app/services/auth/auth.service';
import { Observable } from 'rxjs';

@Injectable()
export class UserService {
  private host: string = '/api';

  constructor(
    private http: HttpClient,
    private authService: AuthService
  ) { }

  async getUser(user_id: number): Promise<User> {
    return this.http.get(`${this.host}/user/${user_id}`)
      .toPromise()
      .then((res) => {
        const response: any = res;
        this.authService.setUser(response)
        return response;
      })
      .catch(this.errorHandler);
  }

  async updateProfile(user_id: number, user: User): Promise<User> {
    return this.http.post(`${this.host}/user/${user_id}`, user)
      .toPromise()
      .then((res) => {
        const response: any = res;
        this.authService.setUser(response)
        return response;
      })
      .catch(this.errorHandler);
  }

  private errorHandler(err) {
    console.log('Error occured.', err);
    return Promise.reject(err.message || err);
  }
}
