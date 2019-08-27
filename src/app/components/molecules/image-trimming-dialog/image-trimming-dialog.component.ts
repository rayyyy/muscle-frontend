import { Component, OnInit, ViewChild, ElementRef, Output, EventEmitter, Input } from '@angular/core';
import Cropper from 'cropperjs';

@Component({
  selector: 'app-image-trimming-dialog',
  templateUrl: './image-trimming-dialog.component.html',
  styleUrls: ['./image-trimming-dialog.component.sass']
})
export class ImageTrimmingDialogComponent implements OnInit {
  @Output() trimmed: EventEmitter<string> = new EventEmitter()
  @Output() closed: EventEmitter<string> = new EventEmitter()
  @Input() src: string

  constructor() { }

  ngOnInit() {
  }

  @ViewChild("image", { static: false })
  imageElement: ElementRef

  public imageDestination: string = ""
  private cropper: Cropper;

  public ngAfterViewInit() {
    this.cropper = new Cropper(this.imageElement.nativeElement, {
      zoomable: false,
      scalable: false,
      aspectRatio: 1,
      crop: () => {
        const canvas = this.cropper.getCroppedCanvas();
        this.imageDestination = canvas.toDataURL("image/png")
        this.trimmed.emit(this.imageDestination)
      }
    });
  }

  close() {
    this.closed.emit('close')
  }
}
