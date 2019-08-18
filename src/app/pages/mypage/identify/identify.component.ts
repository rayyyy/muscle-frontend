import { Component, OnInit } from "@angular/core";
import { Breadcrumb } from "src/app/interfaces/breadcrumb";
import { User } from "src/app/interfaces/user";
import { AuthService } from "src/app/services/auth/auth.service";
import { Observable } from "rxjs";
import { MatSnackBar } from "@angular/material/snack-bar";
import { tap } from "rxjs/operators";

@Component({
  selector: "app-identify",
  templateUrl: "./identify.component.html",
  styleUrls: ["./identify.component.sass"],
  providers: [AuthService]
})
export class IdentifyComponent implements OnInit {
  sites: Breadcrumb[] = [];
  user: Observable<User>;

  constructor(
    private authService: AuthService,
    private snackBar: MatSnackBar
  ) {}

  ngOnInit() {
    this.user = this.authService.getUserApi();
    this.sites.push(
      { pageName: "ホーム", pageURL: "/" },
      { pageName: "マイページ", pageURL: "/mypage" },
      { pageName: "プロフィールを編集", pageURL: "/mypage/identify" }
    );
  }

  save(user: User) {
    this.authService
      .updateIdentifyApi(user)
      .pipe(
        tap(() => {
          this.snackBar.open("プロフィールを更新しました。");
        })
      )
      .subscribe();
  }
}
