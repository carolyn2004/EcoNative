import { Component } from '@angular/core';
import { AuthService } from './auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ecoNative';
  constructor(private authService: AuthService){

  }
  logOut(){
    this.authService.logout();
    console.log('user is logged out!')
    alert('You have logged out of your account!')
  }
}
