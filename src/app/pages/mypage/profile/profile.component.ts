import { Component, OnInit } from '@angular/core';
import { Breadcrumb } from 'src/app/interfaces/breadcrumb';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.sass']
})
export class ProfileComponent implements OnInit {
  sites: Breadcrumb[] = []

  constructor() { }

  ngOnInit() {
    this.sites.push(
      { pageName: "マイページ", pageURL: "/mypage" },
      { pageName: "プロフィールを編集", pageURL: "/mypage/profile" }
    )
  }

}
