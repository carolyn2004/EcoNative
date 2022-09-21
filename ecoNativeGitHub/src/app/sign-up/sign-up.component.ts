import { Component, OnInit } from '@angular/core';
//import FormBuilder and FormGroup form contents
import { FormBuilder, FormGroup, Validators} from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

  registerForm!:FormGroup;
  isSubmitted = false;


  constructor(
    private formBuilder: FormBuilder, private authService: AuthService,private router: Router
  ) { }

  ngOnInit(): void {
    this.registerForm = this.formBuilder.group({
      // email:['', [Validators.required, Validators.email]],
      password: ['',[Validators.required, Validators.minLength(5)]],
      username: ['',Validators.required],
      role: ['',Validators.required],
      // address: ['',[Validators.required, Validators.minLength(10)]]
    });
    //loginForm.controls.email
    //use getter property instead
    //fc.email
  }
get fc(){
  return this.registerForm.controls;
}
submit(){
  this.isSubmitted = true;
  if(this.registerForm.valid) 
  {this.authService.regUser(this.registerForm.value.username,this.registerForm.value.password, 
     this.registerForm.value.role).subscribe();
    return alert (`You have successfully registered an account!`)}
    // this.registerForm.navigateByUrl('/login');
   // alert (`email: ${this.fc.email.value},
  // password: ${this.fc.password.value}`)
}

  }






