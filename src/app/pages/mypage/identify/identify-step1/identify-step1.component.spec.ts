import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { IdentifyStep1Component } from "./identify-step1.component";

describe("IdentifyStep1Component", () => {
  let component: IdentifyStep1Component;
  let fixture: ComponentFixture<IdentifyStep1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [IdentifyStep1Component]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IdentifyStep1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
