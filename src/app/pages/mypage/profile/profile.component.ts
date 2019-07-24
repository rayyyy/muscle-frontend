import { Component, OnInit } from '@angular/core';
import { Breadcrumb } from 'src/app/interfaces/breadcrumb';
import { UserDetail } from 'src/app/interfaces/user-detail';
import { UserService } from 'src/app/services/user/user.service';
import { User } from 'src/app/interfaces/user';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.sass'],
  providers: [UserService]
})
export class ProfileComponent implements OnInit {
  sites: Breadcrumb[] = []
  user: User = {} as User

  constructor(
    private userService: UserService
  ) { }

  ngOnInit() {
    this.sites.push(
      { pageName: 'ホーム', pageURL: '/' },
      { pageName: 'マイページ', pageURL: '/mypage' },
      { pageName: 'プロフィールを編集', pageURL: '/mypage/profile' }
    )

    this.userService.getUser(1)
      .then(
        (response) => {
          this.user = response
        }
      )
      .catch(
        (error) => console.log(error)
      );
  }

  save() {
    this.userService.updateProfile(1, this.user)
  }
}
