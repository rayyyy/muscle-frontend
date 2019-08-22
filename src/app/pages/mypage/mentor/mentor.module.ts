import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MentorRoutingModule } from './mentor-routing.module';
import { MentorComponent } from './mentor.component';
import { BreadcrumbModule } from 'src/app/components/molecules/breadcrumb/breadcrumb.module';
import { FormItemTitleModule } from 'src/app/components/atoms/form-item-title/form-item-title.module';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { TextFieldModule } from '@angular/cdk/text-field';
import { MatButtonModule } from '@angular/material/button';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { AuthUserService } from 'src/app/services/auth-user/auth-user.service';
import { MatSnackBarModule } from '@angular/material/snack-bar';

@NgModule({
  declarations: [MentorComponent],
  imports: [
    CommonModule,
    MentorRoutingModule,
    BreadcrumbModule,
    FormItemTitleModule,
    MatFormFieldModule,
    FormsModule,
    MatInputModule,
    TextFieldModule,
    MatButtonModule,
    MatProgressSpinnerModule,
    MatSnackBarModule
  ],
  providers: [AuthUserService]
})
export class MentorModule { }
