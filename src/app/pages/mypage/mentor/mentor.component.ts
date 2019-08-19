import { Component, OnInit } from '@angular/core';
import { Breadcrumb } from 'src/app/interfaces/breadcrumb';
import { User } from 'src/app/interfaces/user';
import { Observable } from 'rxjs';
import { Mentor } from 'src/app/interfaces/mentor';
import { AuthUserService } from 'src/app/services/auth-user/auth-user.service';
import { tap } from 'rxjs/operators';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-mentor',
  templateUrl: './mentor.component.html',
  styleUrls: ['./mentor.component.sass']
})
export class MentorComponent implements OnInit {
  sites: Breadcrumb[] = []
  user: Observable<User>

  constructor(
    private authUserService: AuthUserService,
    private snackBar: MatSnackBar
  ) { }

  ngOnInit() {
    this.user = this.authUserService.getUser()
    this.sites.push(
      { pageName: 'ホーム', pageURL: '/' },
      { pageName: 'マイページ', pageURL: '/mypage' },
      { pageName: 'メンタープラン', pageURL: '/mypage/mentor' }
    )
  }

  save(mentor: Mentor) {
    this.authUserService.updateMentor(mentor).pipe(
      tap(() => {
        this.snackBar.open('メンタープランを更新しました。');
      })
    ).subscribe()
  }
}
