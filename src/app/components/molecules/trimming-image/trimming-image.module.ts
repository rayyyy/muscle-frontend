import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TrimmingImageComponent } from './trimming-image.component';
import { ImageTrimmingDialogModule } from 'src/app/components/molecules/image-trimming-dialog/image-trimming-dialog.module';
import { AvatarModule } from '../../atoms/avatar/avatar.module';

@NgModule({
  declarations: [TrimmingImageComponent],
  imports: [
    CommonModule,
    ImageTrimmingDialogModule,
    AvatarModule
  ],
  exports: [TrimmingImageComponent]
})
export class TrimmingImageModule { }
