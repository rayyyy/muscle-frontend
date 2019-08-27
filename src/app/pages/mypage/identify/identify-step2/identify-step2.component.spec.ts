import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { IdentifyStep2Component } from "./identify-step2.component";

describe("IdentifyStep2Component", () => {
  let component: IdentifyStep2Component;
  let fixture: ComponentFixture<IdentifyStep2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [IdentifyStep2Component]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IdentifyStep2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
