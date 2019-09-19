import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ResultCheckUpComponent } from './result-check-up.component';

describe('ResultCheckUpComponent', () => {
  let component: ResultCheckUpComponent;
  let fixture: ComponentFixture<ResultCheckUpComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ResultCheckUpComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResultCheckUpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
