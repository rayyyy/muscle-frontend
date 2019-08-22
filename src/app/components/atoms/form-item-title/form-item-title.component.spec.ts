import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormItemTitleComponent } from './form-item-title.component';

describe('FormItemTitleComponent', () => {
  let component: FormItemTitleComponent;
  let fixture: ComponentFixture<FormItemTitleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormItemTitleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormItemTitleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
