import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {
  userProfileForm!:FormGroup;
  isSubmitted = false;


  constructor(
    private formBuilder: FormBuilder,
  ) { }

  ngOnInit(): void {
    this.userProfileForm = this.formBuilder.group({
      email:['carolyn@hotmail.com.sg', [Validators.required, Validators.email]],
      password: ['12345',[Validators.required, Validators.minLength(5)]],
      name: ['Carolyn',Validators.required],
      address: ['Bedok street 21, drive 2, block 626 #122-36',[Validators.required, Validators.minLength(10)]]
    });
    //loginForm.controls.email
    //use getter property instead
    //fc.email
  }
get fc(){
  return this.userProfileForm.controls;
}
submit(){
  this.isSubmitted = true;
  if(this.userProfileForm.valid) 
  return alert (`You have successfully updated your account details!`)
   // alert (`email: ${this.fc.email.value},
  // password: ${this.fc.password.value}`)
}
submit1(){
alert(`You have successfully deleted your account`)
}
}
