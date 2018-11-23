import { Component } from '@angular/core';
// import { RegFormComponent } from './reg-form/reg-form.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'My First Angular Application';

  isRegForm: boolean = true;


}
