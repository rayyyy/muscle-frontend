import { Component, OnInit } from '@angular/core';
import { Breadcrumb } from 'src/app/interfaces/breadcrumb';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-plan',
  templateUrl: './plan.component.html',
  styleUrls: ['./plan.component.sass']
})
export class PlanComponent implements OnInit {
  sites: Breadcrumb[] = []
  userId: string

  constructor(
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.userId = this.route.snapshot.paramMap.get('user_id');
    this.sites.push(
      { pageName: "ホーム", pageURL: "/" },
      { pageName: "tony", pageURL: `/user/${this.userId}` },
      { pageName: "8月までにシックスパック", pageURL: `/user/${this.userId}/plan` }
    )
  }

}
