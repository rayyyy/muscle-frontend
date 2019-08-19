import { Component, OnInit } from '@angular/core';
import { Breadcrumb } from 'src/app/interfaces/breadcrumb';

@Component({
  selector: 'app-mentor',
  templateUrl: './mentor.component.html',
  styleUrls: ['./mentor.component.sass']
})
export class MentorComponent implements OnInit {
  sites: Breadcrumb[] = []

  constructor() { }

  ngOnInit() {
    this.sites.push(
      { pageName: 'ホーム', pageURL: '/' },
      { pageName: 'マイページ', pageURL: '/mypage' },
      { pageName: 'メンタープラン', pageURL: '/mypage/mentor' }
    )
  }

}
