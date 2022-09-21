import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../products.service';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent implements OnInit {
  orders: any = [];
  _id: string = '';
  name: string = "";
  description: string = "";
  price: number = 0;
  constructor(private productService: ProductsService) { }

  ngOnInit(): void {
    this.productService.getOrder().subscribe(order => {
      this.orders = order;
    });
  }


  deleteOrder(_id: string) {
    this.productService.deleteOrder(_id);
    // .subscribe(results => {
      console.log(_id)
      location.reload();
    // });
  }


}
