import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-customer-inquiry',
  templateUrl: './add-customer-inquiry.component.html',
  styleUrls: ['./add-customer-inquiry.component.css']
})
export class AddCustomerInquiryComponent implements OnInit {
  powers =["mass","abans","brandix","advantis"];
  constructor() { }
  b =108;
  ngOnInit() {
  }

  onSubmit() {
  
      console.log("Form Submitted!");
    
  }

}
