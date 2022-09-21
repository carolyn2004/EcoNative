import { Injectable } from '@angular/core';
import { Cart } from './models/Cart';
import { CartItem } from './models/CartItem';
import { products } from './models/products';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private cart: Cart = new Cart();
  addtoCart(products: products): void {
    let cartItem = this.cart.items.find(items => items.products.id === products.id);
    if (cartItem) {
      this.changeQuantity(products.id, cartItem.quantity + 1);
      return;
    }
    this.cart.items.push(new CartItem(products));
  }
  removeFromCart(productId: number): void {
    this.cart.items =
      this.cart.items.filter(item => item.products.id != productId);
  }
  changeQuantity(productId: number, quantity: number) {
    let cartItem = this.cart.items.find(item => item.products.id === productId);
    if (!cartItem) return;
    cartItem.quantity = quantity;
  }
  getCart(): Cart {
    return this.cart;
  }
  clearCart(): Cart{
   return this.cart = new Cart();
 
   
  }
  

}
