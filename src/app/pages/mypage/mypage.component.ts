import { Component, OnInit } from '@angular/core';
import { Breadcrumb } from 'src/app/interfaces/breadcrumb';
import { AuthService } from 'src/app/services/auth/auth.service';
import { User } from 'src/app/interfaces/user';
import { Observable } from 'rxjs';
import { AuthUserService } from 'src/app/services/auth-user/auth-user.service';

@Component({
  selector: 'app-mypage',
  templateUrl: './mypage.component.html',
  styleUrls: ['./mypage.component.sass'],
  providers: [AuthService, AuthUserService]
})
export class MypageComponent implements OnInit {
  sites: Breadcrumb[] = []
  user: Observable<User>

  constructor(
    private authService: AuthService,
    private authUserService: AuthUserService
  ) {}

  ngOnInit() {
    this.user = this.authUserService.getUser()
    this.sites.push(
      { pageName: "ホーム", pageURL: "/" },
      { pageName: "マイページ", pageURL: "/mypage" }
    )
  }

  signOut() {
    this.authService.signOut();
  }
}
