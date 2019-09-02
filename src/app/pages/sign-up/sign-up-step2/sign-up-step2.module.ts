import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SignUpStep2RoutingModule } from './sign-up-step2-routing.module';
import { SignUpStep2Component } from './sign-up-step2.component';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { BreadcrumbModule } from 'src/app/components/molecules/breadcrumb/breadcrumb.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { FormItemTitleModule } from 'src/app/components/atoms/form-item-title/form-item-title.module';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatRadioModule } from '@angular/material/radio';

@NgModule({
  declarations: [SignUpStep2Component],
  imports: [
    CommonModule,
    SignUpStep2RoutingModule,
    CommonModule,
    FlexLayoutModule,
    BreadcrumbModule,
    MatButtonModule,
    MatProgressSpinnerModule,
    FormItemTitleModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatRadioModule
  ]
})
export class SignUpStep2Module {}
