import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DetailIconComponent } from './detail-icon.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
  declarations: [DetailIconComponent],
  imports: [
    CommonModule,
    FlexLayoutModule,
    MatIconModule
  ],
  exports: [DetailIconComponent]
})
export class DetailIconModule { }
