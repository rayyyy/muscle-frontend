import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TrimmingImageComponent } from './trimming-image.component';

describe('TrimmingImageComponent', () => {
  let component: TrimmingImageComponent;
  let fixture: ComponentFixture<TrimmingImageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TrimmingImageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TrimmingImageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
