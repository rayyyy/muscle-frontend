import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SignInRoutingModule } from './sign-in-routing.module';
import { SignInComponent } from './sign-in.component';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { FormItemTitleModule } from 'src/app/components/atoms/form-item-title/form-item-title.module';

@NgModule({
  declarations: [SignInComponent],
  imports: [
    CommonModule,
    SignInRoutingModule,
    FormsModule,
    MatButtonModule,
    MatProgressSpinnerModule,
    FormItemTitleModule,
    FormsModule
  ]
})
export class SignInModule {}
