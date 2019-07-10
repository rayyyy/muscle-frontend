import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ShowRoutingModule } from './show-routing.module';
import { ShowComponent } from './show.component';
import { BreadcrumbModule } from 'src/app/components/molecules/breadcrumb/breadcrumb.module';

@NgModule({
  declarations: [ShowComponent],
  imports: [
    CommonModule,
    ShowRoutingModule,
    BreadcrumbModule
  ]
})
export class ShowModule { }
