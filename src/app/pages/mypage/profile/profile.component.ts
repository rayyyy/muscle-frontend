import { Component, OnInit } from '@angular/core';
import { Breadcrumb } from 'src/app/interfaces/breadcrumb';
import { UserService } from 'src/app/services/user/user.service';
import { User } from 'src/app/interfaces/user';
import { AuthService } from 'src/app/services/auth/auth.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.sass'],
  providers: [UserService, AuthService]
})
export class ProfileComponent implements OnInit {
  sites: Breadcrumb[] = []
  user: User = {} as User

  constructor(
    private userService: UserService,
    private authService: AuthService
  ) {
    this.user = this.authService.getUser()
  }

  ngOnInit() {
    this.sites.push(
      { pageName: 'ホーム', pageURL: '/' },
      { pageName: 'マイページ', pageURL: '/mypage' },
      { pageName: 'プロフィールを編集', pageURL: '/mypage/profile' }
    )
  }

  save() {
    this.userService.updateProfile(this.user.id, this.user).subscribe(user => this.user = user)
  }
}
