import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ImageTrimmingDialogComponent } from './image-trimming-dialog.component';

describe('ImageTrimmingDialogComponent', () => {
  let component: ImageTrimmingDialogComponent;
  let fixture: ComponentFixture<ImageTrimmingDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ImageTrimmingDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ImageTrimmingDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
