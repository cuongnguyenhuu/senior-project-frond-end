import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckUpComponent } from './check-up.component';

describe('CheckUpComponent', () => {
  let component: CheckUpComponent;
  let fixture: ComponentFixture<CheckUpComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CheckUpComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CheckUpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
