// user-logins.component.ts

import { Component } from '@angular/core';
import { User } from '../../models/user.model';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css']
})
export class UserLoginComponent {
  user: User = new User('', '', '');

  constructor(private userService: UserService) {}

  onSubmit() {
    this.userService.loginUser(this.user).subscribe(
      response => {
        console.log('User logged in successfully:', response);
        // Add any additional logic or navigation after successful login
      },
      error => {
        console.error('Error logging in user:', error);
        // Handle error (display message, etc.)
      }
    );
  }
}
