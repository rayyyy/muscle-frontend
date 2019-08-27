import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ImageTrimmingDialogComponent } from './image-trimming-dialog.component';
import { MatButtonModule } from '@angular/material/button';
import { FlexLayoutModule } from '@angular/flex-layout';

@NgModule({
  declarations: [ImageTrimmingDialogComponent],
  imports: [
    CommonModule,
    MatButtonModule,
    FlexLayoutModule
  ],
  exports: [ImageTrimmingDialogComponent]
})
export class ImageTrimmingDialogModule { }
