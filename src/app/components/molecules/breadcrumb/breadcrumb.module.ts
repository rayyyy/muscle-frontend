import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BreadcrumbComponent } from './breadcrumb.component';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
  declarations: [BreadcrumbComponent],
  imports: [
    CommonModule,
    MatDividerModule,
    MatIconModule
  ],
  exports: [BreadcrumbComponent]
})
export class BreadcrumbModule { }
