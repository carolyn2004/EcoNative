import { Component, OnInit,EventEmitter, } from '@angular/core';
import { CartService } from '../cart.service';
import { Cart } from '../models/Cart';
import { CartItem } from '../models/CartItem';
import { products } from '../models/products';
import { ProductsService } from '../products.service';
@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  cart!: Cart;

  constructor(private cartService: CartService) {

    this.setCart();
  }

  removeFromCart(cartItem: CartItem) {
    this.cartService.removeFromCart(cartItem.products.id);
    this.setCart();


  }
  changeQuantity(cartItem: CartItem, quantityInString: string) {
    const quantity = parseInt(quantityInString);
    this.cartService.changeQuantity(cartItem.products.id, quantity);
    this.setCart();
  }

  ngOnInit(): void {
  }
  setCart() {
    this.cart = this.cartService.getCart();
   
   
  }

  
  
}
