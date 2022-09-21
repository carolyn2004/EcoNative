import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  regUserUrl: string = "http://localhost:3000/api/reguser/";
  authuserUrl: string = "http://localhost:3000/api/authuser/";
  constructor(private http: HttpClient) { }
  regUser(username: string, pw: string, role: string) {
    return this.http.post<any[]>(this.regUserUrl, {
      'username': username,
      'password': pw, 'role': role
    });
  }

  authUserf(username: string, pw: string) {
    return this.http.post<any[]>(this.authuserUrl, {
      'username': username,
      'password': pw
    })
   
  }
  setSecureToken(secure_token: string) {
    sessionStorage.setItem("LoggedIn", secure_token)
  }
  getSecureToken() {
    return sessionStorage.getItem("LoggedIn")
  }
  setUserRole(role: string) {
    sessionStorage.setItem("UserRole", role);
  }
  getUserRole() {
    return sessionStorage.getItem("UserRole")
  }
  logout() {
    sessionStorage.clear()
    localStorage.clear()
  }
  isLoggedIn() {
    return this.getSecureToken() !== null;
  }
  isAdmin() {
    return (this.getUserRole() == "admin");
  }
  isUser() {
    return (this.getUserRole() == "user" || this.getUserRole() == "admin");
  }

      

}
