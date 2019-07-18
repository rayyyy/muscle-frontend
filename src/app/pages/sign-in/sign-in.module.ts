import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SignInRoutingModule } from './sign-in-routing.module';
import { SignInComponent } from './sign-in.component';
import { FormsModule } from '@angular/forms';
import { AuthService } from 'src/app/services/auth/auth.service';

@NgModule({
  declarations: [SignInComponent],
  imports: [
    CommonModule,
    SignInRoutingModule,
    FormsModule,
  ],
  providers: [AuthService]
})
export class SignInModule { }
