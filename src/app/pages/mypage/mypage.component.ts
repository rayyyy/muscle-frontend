import { Component, OnInit } from '@angular/core';
import { Breadcrumb } from 'src/app/interfaces/breadcrumb';
import { AuthService } from 'src/app/services/auth/auth.service';
import { UserService } from 'src/app/services/user/user.service';
import { User } from 'src/app/interfaces/user';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-mypage',
  templateUrl: './mypage.component.html',
  styleUrls: ['./mypage.component.sass'],
  providers: [AuthService]
})
export class MypageComponent implements OnInit {
  sites: Breadcrumb[] = []
  user: Observable<User>

  constructor(
    private authService: AuthService,
    private userService: UserService
  ) {}

  ngOnInit() {
    this.user = this.userService.getUser(this.authService.getUserId())
    this.sites.push(
      { pageName: "ホーム", pageURL: "/" },
      { pageName: "マイページ", pageURL: "/mypage" }
    )
  }

  signOut() {
    this.authService.signOut();
  }
}
