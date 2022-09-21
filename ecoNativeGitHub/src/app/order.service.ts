import { Injectable } from '@angular/core';
// import { orderList } from './models/mock-order';
import { Order } from './models/Order';

@Injectable({
  providedIn: 'root'
})
export class OrderService {
  orderList:Order[]= [];
  constructor() {
    

   }
   
   getOrder():Order[]{
    return this.orderList;
   }
   addOrderDetails(item: Order):void{
    this.orderList.push(item);
    console.log(item);
   }
}
