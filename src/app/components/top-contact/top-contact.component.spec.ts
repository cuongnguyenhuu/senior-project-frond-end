import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TopContactComponent } from './top-contact.component';

describe('TopContactComponent', () => {
  let component: TopContactComponent;
  let fixture: ComponentFixture<TopContactComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TopContactComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TopContactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
