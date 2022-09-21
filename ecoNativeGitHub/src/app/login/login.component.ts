import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  myForm!: FormGroup;
  isSubmitted = false;
  results: any = false;

  constructor(private fb: FormBuilder, private authService: AuthService,
    private router: Router) { }

  ngOnInit() {
    this.myForm = this.fb.group({
      name: ['', Validators.required],
      password: ['', Validators.required],
    });
  }
  get fc() {
    return this.myForm.controls;
  }
  onSubmit() {
    this.isSubmitted = true;
    if (this.myForm.valid) {
      
      this.authService.authUserf(this.myForm.value.name,
        this.myForm.value.password).subscribe((data: any) => {
          
          this.results = data;
          if (this.results[0].auth) {
            this.authService.setSecureToken(this.myForm.value.name);
            this.router.navigateByUrl('/user');
            alert('You have logged in sucessfully!')
            sessionStorage.setItem('name', this.myForm.value.name);
            this.authService.setUserRole(this.results[0].role);
          
       
          } else {
            console.log("Wrong username or password")
          }
        });
    }
  }
}
