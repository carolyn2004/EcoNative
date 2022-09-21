import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';
import { FavService } from '../fav.service';
import { Fav } from '../models/Fav';
import { FavItem } from '../models/FavItem';
import { products } from '../models/products';
import { ProductsService } from '../products.service';

@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.component.html',
  styleUrls: ['./favorites.component.css']
})
export class FavoritesComponent implements OnInit {
  FavList: any = [];
  _id: string = "";
  constructor(private productService: ProductsService,) {

  }
  ngOnInit(): void {
    this.productService.getFav().subscribe(fav => {
      this.FavList = fav;
      // this._id = this.FavList._id; 
      
    })

  }

  deleteFav(_id: string)
  {
    // _id = this.FavList._id; 
    console.log(_id);
  this.productService.deleteFav(_id).subscribe(fav => {
  location.reload();
  });
  }
 
}
