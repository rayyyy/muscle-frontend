import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SignUpRoutingModule } from './sign-up-routing.module';
import { SignUpComponent } from './sign-up.component';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { BreadcrumbModule } from 'src/app/components/molecules/breadcrumb/breadcrumb.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { FormItemTitleModule } from 'src/app/components/atoms/form-item-title/form-item-title.module';

@NgModule({
  declarations: [SignUpComponent],
  imports: [
    CommonModule,
    SignUpRoutingModule,
    CommonModule,
    FlexLayoutModule,
    BreadcrumbModule,
    MatButtonModule,
    MatProgressSpinnerModule,
    FormItemTitleModule,
    FormsModule
  ]
})
export class SignUpModule {}
