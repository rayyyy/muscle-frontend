import { Component, OnInit } from '@angular/core';
import { Breadcrumb } from 'src/app/interfaces/breadcrumb';
import { User } from 'src/app/interfaces/user';
import { AuthService } from 'src/app/services/auth/auth.service';
import { Observable } from 'rxjs';
import { MatSnackBar } from '@angular/material/snack-bar';
import { tap } from 'rxjs/operators';

@Component({
  selector: 'app-identify-step2',
  templateUrl: './identify-step2.component.html',
  styleUrls: ['./identify-step2.component.sass'],
  providers: [AuthService]
})
export class IdentifyStep2Component implements OnInit {
  sites: Breadcrumb[] = [];
  user: Observable<User>;

  constructor(
    private authService: AuthService,
    private snackBar: MatSnackBar
  ) {}

  ngOnInit() {
    this.user = this.authService.getUserApi();
    this.sites.push(
      { pageName: 'ホーム', pageURL: '/' },
      { pageName: 'マイページ', pageURL: '/mypage' },
      { pageName: '本人確認', pageURL: '/mypage/identify' },
      { pageName: 'ステップ：2/2', pageURL: '/mypage/identify/step2' }
    );
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
