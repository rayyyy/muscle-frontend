import { Component, ViewChild, ElementRef, Output, EventEmitter, Input } from '@angular/core';
import Cropper from 'cropperjs';

@Component({
  selector: 'app-image-trimming-dialog',
  templateUrl: './image-trimming-dialog.component.html',
  styleUrls: ['./image-trimming-dialog.component.sass']
})
export class ImageTrimmingDialogComponent {
  @Output() trimmed: EventEmitter<string> = new EventEmitter()
  @Output() closed: EventEmitter<string> = new EventEmitter()
  @Input() src: string

  @ViewChild("image", { static: false })
  imageElement: ElementRef

  public imageDestination: string = ""
  cropper: Cropper
  croppable: boolean = false

  imageLoaded(ev: Event) {
    this.croppable = false
    if (this.cropper) {
      this.cropper.destroy();
    }

    this.cropper = new Cropper(this.imageElement.nativeElement, {
      zoomable: false,
      scalable: false,
      aspectRatio: 1,
      ready: () => {
        this.croppable = true
      }
    })
  }

  trimming() {
    if (this.croppable && this.cropper) {
      const canvas = this.cropper.getCroppedCanvas();
      this.imageDestination = canvas.toDataURL("image/png")
      this.trimmed.emit(this.imageDestination)
    } else {
      alert('画像のトリミングに失敗しました')
    }
  }

  close() {
    this.closed.emit('close')
  }
}
