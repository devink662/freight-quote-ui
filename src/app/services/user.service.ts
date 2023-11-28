// user.service.ts

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {User} from "../models/user.model";

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private apiUrl = 'http://localhost:3000/api/users'; // Adjust the URL to your backend API endpoint

  constructor(private http: HttpClient) {
  }

  registerUser(user: User): Observable<any> {
    return this.http.post(`${this.apiUrl}/register`, user);
  }

  loginUser(user: User): Observable<any> {
    return this.http.post(`${this.apiUrl}/login`, user);
  }

  getUserProfile(userId: string): Observable<User> {
    return this.http.get<User>(`${this.apiUrl}/profile/${userId}`);
  }

  updateUserProfile(userId: string, user: User): Observable<any> {
    return this.http.put(`${this.apiUrl}/profile/${userId}`, user);
  }
}
