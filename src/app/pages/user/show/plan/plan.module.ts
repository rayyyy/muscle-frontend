import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PlanRoutingModule } from './plan-routing.module';
import { PlanComponent } from './plan.component';
import { BreadcrumbModule } from 'src/app/components/molecules/breadcrumb/breadcrumb.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatDividerModule } from '@angular/material/divider';
import { MatButtonModule } from '@angular/material/button';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

@NgModule({
  declarations: [PlanComponent],
  imports: [
    CommonModule,
    PlanRoutingModule,
    BreadcrumbModule,
    FlexLayoutModule,
    MatDividerModule,
    MatButtonModule,
    MatProgressSpinnerModule
  ]
})
export class PlanModule { }
