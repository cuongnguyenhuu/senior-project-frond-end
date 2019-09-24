import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DoctorsRecommendingComponent } from './doctors-recommending.component';

describe('DoctorsRecommendingComponent', () => {
  let component: DoctorsRecommendingComponent;
  let fixture: ComponentFixture<DoctorsRecommendingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DoctorsRecommendingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DoctorsRecommendingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
