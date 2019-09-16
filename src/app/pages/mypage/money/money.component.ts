import { Component, OnInit } from '@angular/core';
import { Breadcrumb } from 'src/app/interfaces/breadcrumb';
import { Router } from '@angular/router';

@Component({
  selector: 'app-money',
  templateUrl: './money.component.html',
  styleUrls: ['./money.component.sass']
})
export class MoneyComponent implements OnInit {
  sites: Breadcrumb[] = [];

  constructor(private router: Router) {}

  ngOnInit() {
    this.sites.push(
      { pageName: 'ホーム', pageURL: '/' },
      { pageName: 'マイページ', pageURL: '/mypage' },
      { pageName: '入出金情報', pageURL: '/mypage/money' }
    );
  }

  jump(path: string) {
    this.router.navigate([path]);
  }
}
