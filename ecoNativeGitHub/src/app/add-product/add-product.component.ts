import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {

  addProductForm!: FormGroup;
isSubmitted=false;
  constructor(private formbuilder:FormBuilder) { }

  ngOnInit(): void {
    this.addProductForm = this.formbuilder.group({
      pname:['', Validators.required],
      price: ['',Validators.required],
      description: ['',[Validators.required, Validators.minLength(20)]]
    });
   
  }
get fc(){
  return this.addProductForm.controls;
}
submit(){
  this.isSubmitted = true;
  if(this.addProductForm.valid) 
  return alert (`You have successfully added a product!`);
   // alert (`email: ${this.fc.email.value},
  // password: ${this.fc.password.value}`)
}
}
