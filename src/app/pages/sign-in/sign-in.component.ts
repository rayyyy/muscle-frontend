import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.sass'],
  providers: [AuthService]
})
export class SignInComponent implements OnInit {
  email: string;
  password: string;

  constructor(
    private authService: AuthService
  ) { }

  ngOnInit() { }

  signUp() {
    this.authService.signUp(this.email, this.password);
  }
}
