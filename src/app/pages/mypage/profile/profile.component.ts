import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { Breadcrumb } from 'src/app/interfaces/breadcrumb';
import { User } from 'src/app/interfaces/user';
import { Observable } from 'rxjs';
import { MatSnackBar } from '@angular/material/snack-bar';
import { tap } from 'rxjs/operators';
import { AuthUserService } from 'src/app/services/auth-user/auth-user.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.sass'],
  providers: [AuthUserService]
})
export class ProfileComponent implements OnInit {
  sites: Breadcrumb[] = []
  user: Observable<User>
  newIcon: string = null

  constructor(
    private authUserService: AuthUserService,
    private snackBar: MatSnackBar
  ) {
  }

  ngOnInit() {
    this.user = this.authUserService.getUser()
    this.sites.push(
      { pageName: 'ホーム', pageURL: '/' },
      { pageName: 'マイページ', pageURL: '/mypage' },
      { pageName: 'プロフィールを編集', pageURL: '/mypage/profile' }
    )
  }

  save(user: User) {
    this.authUserService.updateProfile(user, this.newIcon).pipe(
      tap(() => {
        this.snackBar.open('プロフィールを更新しました。', '隠す', { duration: 3000 })
      })
    ).subscribe()
  }

  getTrimmedImage(base64) {
    this.newIcon = base64
  }
}
