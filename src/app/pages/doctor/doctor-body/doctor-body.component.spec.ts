import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DoctorBodyComponent } from './doctor-body.component';

describe('DoctorBodyComponent', () => {
  let component: DoctorBodyComponent;
  let fixture: ComponentFixture<DoctorBodyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DoctorBodyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DoctorBodyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
