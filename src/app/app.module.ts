import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegFormComponent } from './reg-form/reg-form.component';
import { ViewFormComponent } from './view-form/view-form.component';
import { Retrive1Component } from './retrive1/retrive1.component';
import { NewcomersComponent } from './newcomers/newcomers.component';
import { AddCustomerInquiryComponent } from './add-customer-inquiry/add-customer-inquiry.component';
import { ViewComponent } from './view/view.component';
import { FormsModule } from '@angular/forms';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { Form2Component } from './form2/form2.component';

@NgModule({
  declarations: [
    AppComponent,
    RegFormComponent,
    ViewFormComponent,
    Retrive1Component,
    NewcomersComponent,
    AddCustomerInquiryComponent,
    ViewComponent,
    NavBarComponent,
    Form2Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
