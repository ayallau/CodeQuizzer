import { Component } from '@angular/core';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {
  username: string = '';
  email: string = '';
  password: string = '';
  confirmPassword: string = '';

  onSignup() {
    // Add signup logic here
    console.log('Signup clicked', this.username, this.email, this.password, this.confirmPassword);
  }
}
