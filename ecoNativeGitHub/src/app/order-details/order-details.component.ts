import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ProductsService } from '../products.service';
@Component({
  selector: 'app-order-details',
  templateUrl: './order-details.component.html',
  styleUrls: ['./order-details.component.css']
})
export class OrderDetailsComponent implements OnInit {

  constructor(private productService: ProductsService, private fb: FormBuilder) { }
  myForm!: FormGroup;
  isSubmitted = false;
  orderDetails: any = [];
  ngOnInit() {
    this.myForm = this.fb.group({
      user: [sessionStorage.getItem('name'), Validators.required],
      address: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      comments: ['', Validators.required]
    });

    this.productService.getOrderDetails().subscribe(orderDetails => {
      this.orderDetails = orderDetails;
    });
  }
  onSubmit() {
    this.isSubmitted = true;
    if (this.myForm.valid){
    this.productService.addOrderDetails(this.myForm.value.user, this.myForm.value.address, this.myForm.value.email, this.myForm.value.comments).subscribe(results => {
      location.reload();
    })}else {
      console.log("Fields not valid!")
    alert('Fields not valid!')}

    
  }
  deleteOrderDetails(_id: string) {
    this.productService.deleteOrderDetails(_id).subscribe(orderDetails => {
      location.reload();
    });
  }
  get fc() {
    return this.myForm.controls;
  }
  updateOrderDetails(_id: string) {
    console.log(_id);
    var user = (document.getElementById(_id+'_user') as HTMLInputElement).value;
    var address = (document.getElementById(_id+'_address') as HTMLInputElement).value;
    var email = (document.getElementById(_id+'_email') as HTMLInputElement).value;
    var comments = (document.getElementById(_id+'_comments') as HTMLInputElement).value;
    this.productService.updateOrderDetails(_id, user, address, email, comments).subscribe(orderDetails => {
    location.reload();
    });
    }

}
