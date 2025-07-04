import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  isConnected = false; // TODO: Replace with real auth logic
  userName = '';

  constructor() {
    // TODO: Replace with real user/auth service
    // Example mock logic:
    // this.isConnected = AuthService.isLoggedIn();
    // this.userName = AuthService.getUserName();
  }

  logout() {
    // TODO: Implement logout logic and redirect to welcome page
    this.isConnected = false;
    this.userName = '';
    // Example: this.router.navigate(['/']);
  }
}
