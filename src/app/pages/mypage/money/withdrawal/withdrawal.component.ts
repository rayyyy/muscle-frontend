import { Component, OnInit } from '@angular/core';
import { Breadcrumb } from 'src/app/interfaces/breadcrumb';
import { User } from 'src/app/interfaces/user';
import { AuthUserService } from 'src/app/services/auth-user/auth-user.service';
import { Observable } from 'rxjs';
import { MatSnackBar } from '@angular/material/snack-bar';
import { tap } from 'rxjs/operators';

@Component({
  selector: 'app-withdrawal',
  templateUrl: './withdrawal.component.html',
  styleUrls: ['./withdrawal.component.sass'],
  providers: [AuthUserService]
})
export class WithdrawalComponent implements OnInit {
  sites: Breadcrumb[] = [];
  user: Observable<User>;

  constructor(
    private authUserService: AuthUserService,
    private snackBar: MatSnackBar
  ) {}

  ngOnInit() {
    this.user = this.authUserService.getUser();
    this.sites.push(
      { pageName: 'ホーム', pageURL: '/' },
      { pageName: 'マイページ', pageURL: '/mypage' },
      { pageName: '入出金情報', pageURL: '/mypage/money' },
      { pageName: '出金先情報', pageURL: '/mypage/identify/withdrawal' }
    );
  }

  save(user: User) {}
}
