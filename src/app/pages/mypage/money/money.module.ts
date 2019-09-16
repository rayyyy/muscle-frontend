import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MoneyRoutingModule } from './money-routing.module';
import { MoneyComponent } from './money.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { BreadcrumbModule } from 'src/app/components/molecules/breadcrumb/breadcrumb.module';
import { MatButtonModule } from '@angular/material/button';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { FormItemTitleModule } from 'src/app/components/atoms/form-item-title/form-item-title.module';
import { MatSnackBarModule } from '@angular/material/snack-bar';

@NgModule({
  declarations: [MoneyComponent],
  imports: [
    CommonModule,
    MoneyRoutingModule,
    FlexLayoutModule,
    BreadcrumbModule,
    MatButtonModule,
    MatProgressSpinnerModule,
    FormItemTitleModule,
    MatSnackBarModule
  ]
})
export class MoneyModule {}
