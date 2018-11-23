import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddCustomerInquiryComponent } from './add-customer-inquiry.component';

describe('AddCustomerInquiryComponent', () => {
  let component: AddCustomerInquiryComponent;
  let fixture: ComponentFixture<AddCustomerInquiryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddCustomerInquiryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddCustomerInquiryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
