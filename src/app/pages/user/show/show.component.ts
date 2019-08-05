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
  user: User

  constructor(
    private route: ActivatedRoute,
    private userService: UserService
  ) { }

  ngOnInit() {
    this.userId = parseInt(this.route.snapshot.paramMap.get('user_id'))
    this.userService.getUser(this.userId).subscribe(res => {
      this.user = res
      this.sites.push(
        { pageName: 'ホーム', pageURL: '/' },
        { pageName: this.user.nickname, pageURL: `/user/${this.userId}` }
      )
    })
  }

}
