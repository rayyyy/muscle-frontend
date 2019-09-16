import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PaymentRoutingModule } from './payment-routing.module';
import { PaymentComponent } from './payment.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { TextFieldModule } from '@angular/cdk/text-field';
import { BreadcrumbModule } from 'src/app/components/molecules/breadcrumb/breadcrumb.module';
import { MatButtonModule } from '@angular/material/button';
import { FormsModule } from '@angular/forms';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { FormItemTitleModule } from 'src/app/components/atoms/form-item-title/form-item-title.module';

@NgModule({
  declarations: [PaymentComponent],
  imports: [
    CommonModule,
    PaymentRoutingModule,
    FlexLayoutModule,
    MatFormFieldModule,
    MatInputModule,
    TextFieldModule,
    BreadcrumbModule,
    MatButtonModule,
    FormsModule,
    MatProgressSpinnerModule,
    FormItemTitleModule,
    MatSnackBarModule
  ]
})
export class PaymentModule {}
