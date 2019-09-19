import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PatientBodyComponent } from './patient-body.component';

describe('PatientBodyComponent', () => {
  let component: PatientBodyComponent;
  let fixture: ComponentFixture<PatientBodyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PatientBodyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PatientBodyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
