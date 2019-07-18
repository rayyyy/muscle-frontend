import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth/auth.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.sass']
})
export class SignUpComponent implements OnInit {
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
