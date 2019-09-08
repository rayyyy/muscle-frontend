import { Component, Input, Output, EventEmitter } from '@angular/core';
import Compressor from 'compressorjs';

@Component({
  selector: 'app-trimming-image',
  templateUrl: './trimming-image.component.html',
  styleUrls: ['./trimming-image.component.sass']
})
export class TrimmingImageComponent {
  @Output() getTrimmedImage: EventEmitter<string> = new EventEmitter()
  @Input() multipleNum: string

  newImageSrc: string = null
  trimmingDialog: boolean = false

  constructor() { }

  trimmingTargetSrc: any = '';
  reader = new FileReader();

  onChangeInput(evt) {
    const file = evt.target.files[0]

    this.reader.onload = ((e) => {
      this.trimmingTargetSrc = e.target['result']
      this.trimmingDialog = true
    })

    new Compressor(file, {
      quality: 0.4,
      success: result => {
        this.reader.readAsDataURL(result)
      },
      error(err) {
        console.log(err.message);
      },
    });
  }

  closeDialog() {
    this.newImageSrc = null
    this.trimmingDialog = false
  }

  trimmed(base64) {
    this.newImageSrc = base64
    this.trimmingDialog = false
    this.getTrimmedImage.emit(base64)
  }
}
