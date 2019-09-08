import { Component, OnInit } from '@angular/core';
import { Breadcrumb } from 'src/app/interfaces/breadcrumb';
import { User } from 'src/app/interfaces/user';
import { Mentor } from 'src/app/interfaces/mentor';
import { AuthUserService } from 'src/app/services/auth-user/auth-user.service';
import { tap } from 'rxjs/operators';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MentorPlan } from 'src/app/interfaces/mentor_plan';

@Component({
  selector: 'app-mentor',
  templateUrl: './mentor.component.html',
  styleUrls: ['./mentor.component.sass']
})
export class MentorComponent implements OnInit {
  sites: Breadcrumb[] = []
  user: User
  newImage1: string = null
  newImage2: string = null
  newImage3: string = null
  newImage4: string = null

  constructor(
    private authUserService: AuthUserService,
    private snackBar: MatSnackBar
  ) { }

  ngOnInit() {
    this.authUserService.getUser().subscribe(user => {
      this.user = user
    })
    this.sites.push(
      { pageName: 'ホーム', pageURL: '/' },
      { pageName: 'マイページ', pageURL: '/mypage' },
      { pageName: 'メンタープラン', pageURL: '/mypage/mentor' }
    )
  }

  save(mentor: Mentor) {
    this.authUserService.updateMentor(mentor).pipe(
      tap(() => {
        this.snackBar.open('メンタープランを更新しました。', '隠す', {duration: 3000})
      })
    ).subscribe()
  }

  add_plan() {
    if (!this.user.mentor.mentor_plans) {
      this.user.mentor.mentor_plans = []
    }
    this.user.mentor.mentor_plans.push({} as MentorPlan)
  }

  getTrimmedImage1(base64) {
    console.log(1)
    this.newImage1 = base64
  }

  getTrimmedImage2(base64) {
    console.log(2)
    this.newImage2 = base64
  }

  getTrimmedImage3(base64) {
    console.log(3)
    this.newImage3 = base64
  }

  getTrimmedImage4(base64) {
    console.log(4)
    this.newImage4 = base64
  }
}
