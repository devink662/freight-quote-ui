// user-registration.component.ts

import { Component } from '@angular/core';
import { User } from '../../models/user.model';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-user-registration',
  templateUrl: './user-registration.component.html',
  styleUrls: ['./user-registration.component.css']
})
export class UserRegistrationComponent {
  user: User = new User(
    '', // Name
    '', // Email
    '', // Password
  );

  constructor(private userService: UserService) {}

  onSubmit() {
    this.userService.registerUser(this.user).subscribe(
      response => {
        console.log('User registered successfully:', response);
        // Add any additional logic or navigation after successful registration
      },
      error => {
        console.error('Error registering user:', error);
        // Handle error (display message, etc.)
      }
    );
  }
}
