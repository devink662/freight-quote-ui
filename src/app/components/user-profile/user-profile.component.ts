// user-profile.component.ts

import { Component, OnInit } from '@angular/core';
import { User } from '../../models/user.model';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {
  user: User = new User('Devin', 'test@email.com', '123');
  editing = false;

  constructor(private userService: UserService) {}

  ngOnInit() {
    // Load user profile data on component initialization
    this.loadUserProfile();
  }

  loadUserProfile() {
    const userId = '123'; // Replace with actual user ID or retrieve from authentication
    this.userService.getUserProfile(userId).subscribe(
      (response) => {
        this.user = response;
      },
      (error) => {
        console.error('Error loading user profile:', error);
      }
    );
  }

  editProfile() {
    this.editing = true;
  }

  saveProfile() {
    const userId = '123'; // Replace with actual user ID or retrieve from authentication
    this.userService.updateUserProfile(userId, this.user).subscribe(
      () => {
        this.editing = false;
        console.log('User profile updated successfully');
      },
      (error) => {
        console.error('Error updating user profile:', error);
      }
    );
  }
}
