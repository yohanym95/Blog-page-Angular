import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Body2Component } from './body2.component';

describe('Body2Component', () => {
  let component: Body2Component;
  let fixture: ComponentFixture<Body2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Body2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Body2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
