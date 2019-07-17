import { Component, OnInit } from '@angular/core';
import { Breadcrumb } from 'src/app/interfaces/breadcrumb';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-show',
  templateUrl: './show.component.html',
  styleUrls: ['./show.component.sass']
})
export class ShowComponent implements OnInit {
  sites: Breadcrumb[] = []
  userId: string
  planId: string

  constructor(
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.userId = this.route.snapshot.paramMap.get('user_id');
    this.planId = this.route.snapshot.paramMap.get('plan_id');
    this.sites.push(
      { pageName: "ホーム", pageURL: "/" },
      { pageName: "tony", pageURL: `/user/${this.userId}` },
      { pageName: "8月までにシックスパック", pageURL: `/user/${this.userId}/plan/${this.planId}` }
    )
  }

}
