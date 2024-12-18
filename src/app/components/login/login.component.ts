import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  email: string = ""; // No default values, starts empty
  password: string = ""; // No default values, starts empty

  onSubmit(loginForm: NgForm) {
    if (loginForm.valid) {
      console.log('Form Submitted!');
      // Add navigation to the next page here
    }
  }
}
