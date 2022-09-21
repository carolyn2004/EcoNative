import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { CartService } from '../cart.service';
import { Order } from '../models/Order';
import { OrderService } from '../order.service';

@Component({
  selector: 'app-order-summary',
  templateUrl: './order-summary.component.html',
  styleUrls: ['./order-summary.component.css']
})
export class OrderSummaryComponent implements OnInit {
  order:Order = new Order();//to diplay order items
  constructor(private formbuilder: FormBuilder,private cartService: CartService,private route: Router, private orderService: OrderService) {
    const cart = cartService.getCart();
     this.order.items = cart.items;
    // this.order.totalPrice = cart.totalPrice;
    console.log(cart)
    // console.log(this.order.name);
    // console.log(this.order.email);
    // console.log(this.order.address);
    
    

  }
    
  getOrder() {
    this.order = this.orderService.getOrder()[0];
    console.log(this.order.email);
    console.log(this.order.name);
    console.log(this.order.address);
   
  } 
  clearCart(){
    this.cartService.clearCart();
    alert(`Your order has been confirmed! Thank you for shopping with Eco-Native.`)
    this.route.navigate(['/home']);

  }
  
  ngOnInit(): void {
    this.getOrder();
   
  }

  // @Input()
  // name!: any[];
  // error lies here
}
