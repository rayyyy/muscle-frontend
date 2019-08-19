import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MentorRoutingModule } from './mentor-routing.module';
import { MentorComponent } from './mentor.component';
import { BreadcrumbModule } from 'src/app/components/molecules/breadcrumb/breadcrumb.module';

@NgModule({
  declarations: [MentorComponent],
  imports: [
    CommonModule,
    MentorRoutingModule,
    BreadcrumbModule
  ]
})
export class MentorModule { }
