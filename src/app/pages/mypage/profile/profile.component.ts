import { Component, OnInit } from '@angular/core';
import { Breadcrumb } from 'src/app/interfaces/breadcrumb';
import { UserDetail } from 'src/app/interfaces/user-detail';
import { UserService } from 'src/app/services/user/user.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.sass'],
  providers: [UserService]
})
export class ProfileComponent implements OnInit {
  sites: Breadcrumb[] = []
  user_detail: UserDetail = {} as UserDetail

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
          this.user_detail = response.user_detail
        }
      )
      .catch(
        (error) => console.log(error)
      );
  }

  save() {
    console.log(this.user_detail)
    this.userService.updateProfile(1, this.user_detail)
  }
}
