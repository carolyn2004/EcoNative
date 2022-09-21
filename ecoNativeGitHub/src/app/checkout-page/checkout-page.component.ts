
import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { CartService } from '../cart.service';
import { Cart } from '../models/Cart';
import { Order } from '../models/Order';
import { OrderService } from '../order.service';


@Component({
  selector: 'app-checkout-page',
  templateUrl: './checkout-page.component.html',
  styleUrls: ['./checkout-page.component.css']
})
export class CheckoutPageComponent implements OnInit {
  
  order:Order = new Order();
  checkOutForm!: FormGroup;
  isSubmitted = false;
  

  constructor(private formbuilder: FormBuilder, private cartService: CartService, private route: Router, private orderService: OrderService) {
    const cart = cartService.getCart();
    this.order.items = cart.items;
    this.order.totalPrice = cart.totalPrice;
  
    

  }

  ngOnInit(): void {
   
    this.checkOutForm = this.formbuilder.group({
     
      name: ['', [Validators.required],],
      email: ['', [Validators.required, Validators.email]],
      address: ['', [Validators.required, Validators.minLength(10)]],
    });

    //loginForm.controls.email
    //use getter property instead
    //fc.email
  }
  get fc() {
    return this.checkOutForm.controls;
  }
  submit() {
    this.isSubmitted = true;
    if (this.checkOutForm.invalid)
      return
     
      // console.log(`name: ${this.fc.name.value},email: ${this.fc.email.value},address: ${this.fc.address.value}`);
    alert('Your order has been placed! Order will be delivered upon successful payment.')
    this.route.navigate(['/order-summary']);
    this.order.name=this.fc.name.value;
    this.order.email=this.fc.email.value;
    this.order.address=this.fc.address.value;
  // console.log(this.order.name);
  // console.log(this.order.email);
  // console.log(this.order.address);

  }
 
  addOrderDetails(){
    console.log(this.order)
    this.orderService.addOrderDetails(this.order);
  }





}
