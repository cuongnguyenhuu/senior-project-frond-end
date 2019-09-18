import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PatientCheckUpComponent } from './patient-check-up.component';

describe('PatientCheckUpComponent', () => {
  let component: PatientCheckUpComponent;
  let fixture: ComponentFixture<PatientCheckUpComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PatientCheckUpComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PatientCheckUpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
