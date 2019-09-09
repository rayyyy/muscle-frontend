import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth/auth.service';
import { User } from 'src/app/interfaces/user';
import { Observable } from 'rxjs';
import { MatSnackBar } from '@angular/material/snack-bar';
import { tap } from 'rxjs/operators';
import { Router } from '@angular/router';

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
    private snackBar: MatSnackBar,
    private router: Router
  ) {}

  ngOnInit() {
    this.user = this.authService.getUserApi();
  }
  save(user: User) {
    console.log('■■■■uid=' + user.uid);
    this.authService
      .updateProfileApi(user)
      .pipe(
        tap(() => {
          this.snackBar.open('プロフィールを更新しました。', '隠す', {
            duration: 3000
          });
          // this.router.navigate(['/']);
        })
      )
      .subscribe();
  }
}
