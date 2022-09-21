import { Injectable } from '@angular/core';
import { Fav } from './models/Fav';
import { FavItem } from './models/FavItem';
import { products } from './models/products';

@Injectable({
  providedIn: 'root'
})
export class FavService {
  // private fav:Fav = new Fav();

  addToFav(products: products):void{
    // let favItem = this.fav.items.find(item => item.products.id === products.id);
    // if(favItem){
    //   this.changeQuantity(products.id, favItem.quantity + 1);
    //   return;
    // }
    // this.fav.items.push(new FavItem(products));
  }

  // removeFromFav(productId:number): void{
  //   this.fav.items = 
  //   this.fav.items.filter(item => item.products.id != productId);
  // }

  // changeQuantity(productId:number, quantity:number){
  //   let favItem = this.fav.items.find(item => item.products.id === productId);
  //   if(!favItem) return;
  //   favItem.quantity = quantity;
  // }
  

  // getFav():Fav{
  //   return this.fav;
  // }
}
