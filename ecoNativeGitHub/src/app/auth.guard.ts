import { Injectable } from '@angular/core';
import {
  CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree,
  Router
} from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';
@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private authService: AuthService, private router: Router) { }
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      
      const permission = route.data["permission"] ;
    if (this.authService.isLoggedIn() &&
      permission.only.includes(this.authService.getUserRole())) {
      return true;
    } 
    else {
      alert("You are not authorized to access the page");
      console.log("You had been logout, You are not authorized to access the page");
      this.router.navigateByUrl('/logout');
      return true;
    }
    
  }

}