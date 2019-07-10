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

  constructor(
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.userId = this.route.snapshot.paramMap.get('id');
    this.sites.push(
      { pageName: "ホーム", pageURL: "/" },
      { pageName: "tony", pageURL: `/user/${this.userId}` }
    )
  }

}
