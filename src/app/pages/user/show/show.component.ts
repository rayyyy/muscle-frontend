import { Component, OnInit } from '@angular/core';
import { Breadcrumb } from 'src/app/interfaces/breadcrumb';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { User } from 'src/app/interfaces/user';
import { UserService } from 'src/app/services/user/user.service';

@Component({
  selector: 'app-show',
  templateUrl: './show.component.html',
  styleUrls: ['./show.component.sass']
})
export class ShowComponent implements OnInit {
  sites: Breadcrumb[] = []
  userId: number
  user: Observable<User>

  constructor(
    private route: ActivatedRoute,
    private userService: UserService
  ) { }

  ngOnInit() {
    this.userId = parseInt(this.route.snapshot.paramMap.get('id'))
    this.user = this.userService.getUser(this.userId)
    this.sites.push(
      { pageName: "ホーム", pageURL: "/" },
      { pageName: "tony", pageURL: `/user/${this.userId}` }
    )
  }

}
