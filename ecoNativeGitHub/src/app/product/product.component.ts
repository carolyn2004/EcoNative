import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { CartService } from '../cart.service';
import { FavService } from '../fav.service';
import { products } from '../models/products';
import { ProductsService } from '../products.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
 
  
  // products!: products;
  productsList:any=[];
  _id: string = '';
  private sub: any;

 
  name: string = "";
  description: string = "";
  price: number = 0;
  image: string = "";
  tags: string = "";
  user: string = "";
  productId: string = "";
  // productId: string = "";

  constructor(private activatedRoute: ActivatedRoute, private productService: ProductsService,
    private cartService:CartService, private router:Router, private authService: AuthService) { 
    // activatedRoute.params.subscribe((params) =>
    // {
    //   if (params.id)
    //   this.products = productService.getProductsById(params.id)
    // }
    // )
    
 
  
  }

  ngOnInit(): void {
    this.sub = this.activatedRoute.params.subscribe(params=>{
      //store parameter productId into our this.productId local variable
      this._id = params['_id']; //the plus sign + converts string productId to a num
      console.log(this._id);
    })
    
    this.productService.getOneProduct(this._id).subscribe(products =>{
      this.productsList = products;
      this.productsList = Object.values(this.productsList);
      this.name = this.productsList[1];
      this.description = this.productsList[2];
      this.price = this.productsList[3];
      this.image = this.productsList[4];
      this.tags = this.productsList[5];
      localStorage.setItem('product_id', this._id)
    })
    
    
     
  }
  
  addToCart(){
    console.log(this.price)
    this.productService.storeProductInStorage(this._id, this.name,this.description,this.image,this.tags, this.price);
    // this.productService.storeProductInStorage(this.name);
    // this.productService.storeProductInStorage(this.description);
    // this.productService.storeProductInStorage(this.price.toString());
    // this.productService.storeProductInStorage(this.image);
    // this.productService.storeProductInStorage(this.tags);
  }
  
addToFav(){
  // console.log(this._id)
  this.productId = localStorage.getItem('product_id') as string;
  console.log(this.name)
  console.log(this.image)
  console.log(this.description)
  console.log(this.price)
  this.user = sessionStorage.getItem('name') as string;
  console.log(this.user)
  this.productService.addToFav(this.productId, this.name, this.image, this.description,this.price,this.user)
  alert('This item has been added to favorites!')
}
activeTab:string = 'Delivery';
onTabClick(tab: string){
  this.activeTab = tab;
}
}

