import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { JwtHelperService } from '@auth0/angular-jwt';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl = ' http://localhost:3000/api/v1'; // Adjust the API URL accordingly

  constructor(private http: HttpClient, private jwtHelper: JwtHelperService, private router: Router) {}

  register(username: string, password: string, name: string, email: string, role: string) {
    return this.http.post(`${this.apiUrl}/register`, { username, password, name, email, role });
  }

  login(username: string, password: string) {
    return this.http.post<{ token: string }>(`${this.apiUrl}/login`, { username, password }).subscribe(response => {
      localStorage.setItem('token', response.token);
      this.router.navigate(['/chat']);
    });
  }

  isAuthenticated(): boolean {
    const token = localStorage.getItem('token');
    return !this.jwtHelper.isTokenExpired(token);
  }

  logout() {
    localStorage.removeItem('token');
    this.router.navigate(['/login']);
  }
}

