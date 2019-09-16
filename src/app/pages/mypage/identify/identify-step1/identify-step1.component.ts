import { Component, OnInit } from '@angular/core';
import { Breadcrumb } from 'src/app/interfaces/breadcrumb';
import { User } from 'src/app/interfaces/user';
import { AuthUserService } from 'src/app/services/auth-user/auth-user.service';
import { Observable } from 'rxjs';
import { MatSnackBar } from '@angular/material/snack-bar';
import { tap } from 'rxjs/operators';

@Component({
  selector: 'app-identify-step1',
  templateUrl: './identify-step1.component.html',
  styleUrls: ['./identify-step1.component.sass'],
  providers: [AuthUserService]
})
export class IdentifyStep1Component implements OnInit {
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
      { pageName: '本人確認', pageURL: '/mypage/identify' },
      { pageName: 'ステップ：1/2', pageURL: '/mypage/identify/step1' }
    );
  }

  save(user: User) {}
}
