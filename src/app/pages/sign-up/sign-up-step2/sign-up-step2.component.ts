import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth/auth.service';
import { User } from 'src/app/interfaces/user';
import { Observable } from 'rxjs';
import { MatSnackBar } from '@angular/material/snack-bar';
import { tap } from 'rxjs/operators';

@Component({
  selector: 'app-sign-up-step2',
  templateUrl: './sign-up-step2.component.html',
  styleUrls: ['./sign-up-step2.component.sass'],
  providers: [AuthService]
})
export class SignUpStep2Component implements OnInit {
  user: Observable<User>;

  constructor(
    private authService: AuthService,
    private snackBar: MatSnackBar
  ) {}

  ngOnInit() {
    this.user = this.authService.getUserApi();
  }
  save(user: User) {
    this.authService
      .updateProfileApi(user)
      .pipe(
        tap(() => {
          this.snackBar.open('プロフィールを更新しました。');
        })
      )
      .subscribe();
  }
}
