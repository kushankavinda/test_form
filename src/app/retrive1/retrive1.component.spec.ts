import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Retrive1Component } from './retrive1.component';

describe('Retrive1Component', () => {
  let component: Retrive1Component;
  let fixture: ComponentFixture<Retrive1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Retrive1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Retrive1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
