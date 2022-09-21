import { Component, OnInit } from '@angular/core';
import { products } from '../models/products';
import { ProductsService } from '../products.service';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  productsList:any=[];
  // products!:products[];
  constructor(private productService:ProductsService,private route:ActivatedRoute
    ) { }
    

  ngOnInit(): void {
    this.productService.getAllProducts().subscribe(products=>{
      this.productsList = products;
    })
  //   this.route.params.subscribe(params => {
  //     if(params.searchTerm)
  //     this.products = this.productService.getAll().filter(products => products.name.toLowerCase().includes(params.searchTerm.toLowerCase()))
  // else if (params.tag)
  // this.products = this.productService.getAllProductsByTag(params.tag)
  //     else
  //  this.products = this.productService.getAll();
  //   });
    
  }
  
  
  

}
