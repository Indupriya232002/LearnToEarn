import { Component } from '@angular/core';
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { Router } from '@angular/router'; // Import Router
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {

  firstName: string = '';
  lastName: string = '';
  email: string = '';
  password: string = '';
  repeatPassword: string = '';
  role: string = '';
  isSubmitted: boolean = false;
  username: string | null = null;
  
  // Additional fields
  gender: string = '';
  ethnicity: string = '';
  age: number | null = null;
  income: string = '';
  firstLanguage: string = '';
  education: string = '';
  children: number | null = null;

  constructor(private router: Router) {} // Inject the Router

  onSubmit(form: any) {
    if (form.valid) {
      console.log('Form Submitted!');
      this.isSubmitted = true;
      // Set the username based on first and last name
      this.username = `${this.firstName} ${this.lastName}`;
    }
  }

  updateAccount() {
    // Logic to redirect to the UserDashboard
    this.router.navigate(['/userdashboard']); // Ensure you create this route
  }
}
