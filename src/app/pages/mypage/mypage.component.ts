import { Component, OnInit } from '@angular/core';
import { Breadcrumb } from 'src/app/interfaces/breadcrumb';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-mypage',
  templateUrl: './mypage.component.html',
  styleUrls: ['./mypage.component.sass'],
  providers: [AuthService]
})
export class MypageComponent implements OnInit {
  sites: Breadcrumb[] = []

  constructor(
    private authService: AuthService
  ) { }

  ngOnInit() {
    this.sites.push(
      { pageName: "ホーム", pageURL: "/" },
      { pageName: "マイページ", pageURL: "/mypage" }
    )
  }

  signOut() {
    this.authService.signOut();
  }
}
