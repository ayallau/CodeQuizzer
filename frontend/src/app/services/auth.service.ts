import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, BehaviorSubject, of } from 'rxjs';
import { tap, catchError } from 'rxjs/operators';
import { User } from '../models/user';

export interface LoginRequest {
  username: string;
  password: string;
}

export interface SignupRequest {
  username: string;
  email: string;
  password: string;
}

export interface AuthResponse {
  user: User;
  message: string;
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl = 'http://localhost:8000';
  private userKey = 'current_user';
  
  private currentUserSubject = new BehaviorSubject<User | null>(null);
  public currentUser$ = this.currentUserSubject.asObservable();

  constructor(private http: HttpClient) {
    this.loadStoredUser();
  }

  // Login
  login(credentials: LoginRequest): Observable<AuthResponse> {
    return this.http.post<AuthResponse>(`${this.apiUrl}/login`, credentials)
      .pipe(
        tap(response => {
          this.setCurrentUser(response.user);
        }),
        catchError(error => {
          console.error('Login error:', error);
          throw error;
        })
      );
  }

  // Signup
  signup(userData: SignupRequest): Observable<AuthResponse> {
    return this.http.post<AuthResponse>(`${this.apiUrl}/signup`, userData)
      .pipe(
        tap(response => {
          this.setCurrentUser(response.user);
        }),
        catchError(error => {
          console.error('Signup error:', error);
          throw error;
        })
      );
  }

  // Reset Password
  resetPassword(email: string): Observable<any> {
    return this.http.post(`${this.apiUrl}/reset-password`, { email })
      .pipe(
        catchError(error => {
          console.error('Reset password error:', error);
          throw error;
        })
      );
  }

  // Logout
  logout(): void {
    this.removeCurrentUser();
    this.currentUserSubject.next(null);
  }

  // Check if user is logged in
  isLoggedIn(): boolean {
    return !!this.getCurrentUser();
  }

  // Get current user
  getCurrentUser(): User | null {
    return this.currentUserSubject.value;
  }

  // Set current user
  private setCurrentUser(user: User): void {
    localStorage.setItem(this.userKey, JSON.stringify(user));
    this.currentUserSubject.next(user);
  }

  // Remove current user
  private removeCurrentUser(): void {
    localStorage.removeItem(this.userKey);
  }

  // Load stored user on app initialization
  private loadStoredUser(): void {
    const storedUser = localStorage.getItem(this.userKey);
    if (storedUser) {
      try {
        const user = JSON.parse(storedUser);
        this.currentUserSubject.next(user);
      } catch (error) {
        console.error('Error parsing stored user:', error);
        this.removeCurrentUser();
      }
    }
  }
} 