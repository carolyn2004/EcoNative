import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../products.service';

@Component({
  selector: 'app-all-orders',
  templateUrl: './all-orders.component.html',
  styleUrls: ['./all-orders.component.css']
})
export class AllOrdersComponent implements OnInit {
  orderList:any=[];
  constructor(private productService:ProductsService) { }

  ngOnInit(): void {
    this.productService.getAllOrders().subscribe(orders=>{
      this.orderList = orders;
      
      
    })
  }

}
