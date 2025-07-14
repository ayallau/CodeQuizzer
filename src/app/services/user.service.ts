import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../models/user';

@Injectable({
    providedIn: 'root'
})
export class UserService {
    private apiUrl = 'http://localhost:8000/api/users'; // דוגמא ל-API

    constructor(private http: HttpClient) { }

    getUserProfile(): Observable<User> {
        return this.http.get<User>(`${this.apiUrl}/profile`);
    }
}
