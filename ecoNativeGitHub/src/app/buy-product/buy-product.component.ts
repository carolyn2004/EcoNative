import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { ProductsService } from '../products.service';

@Component({
  selector: 'app-buy-product',
  templateUrl: './buy-product.component.html',
  styleUrls: ['./buy-product.component.css']
})
export class BuyProductComponent implements OnInit {
  
  _id: string = '';
  name: string = "";
  description: string = "";
  price: number = 0;
  image: string = "";
  tags: string = "";
  user: string = "";
  constructor(private productService:ProductsService, private authService: AuthService) {

    localStorage.getItem('product_id');
    console.log( localStorage.getItem('product_id'));
    
    this.setValues();
    
    
    
  }

  setValues() {
    this.name = localStorage.getItem('name') as string;
    this.price = parseFloat(localStorage.getItem('price') as string);
    this.description = localStorage.getItem('description') as string;
    this.user = sessionStorage.getItem('name') as string;
    console.log(this.name)
    console.log(this.description)
    console.log(this.price)
    console.log(this.tags)
    console.log(this.user)


  }
buyProduct(){
  this.productService.buyProduct(this.name,this.description, this.price, this.user)
  alert('Order confirmed!')
}

// test(){
//   console.log('here');
//   this.authService.buyProduct(this.name,this.description, this.price, this.user);
// }
  ngOnInit(): void {

    // object = any{};
    // this.object = this.productService.GetProductFromStorage()
    // object = [];
    // var object = this.productService.GetProductFromStorage();
    // this.name = object['name'];
     
    // console.log(object);
  }
  


}
