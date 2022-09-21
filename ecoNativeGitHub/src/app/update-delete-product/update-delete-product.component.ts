import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CartService } from '../cart.service';
import { FavService } from '../fav.service';
import { products } from '../models/products';
import { ProductsService } from '../products.service';

@Component({
  selector: 'app-update-delete-product',
  templateUrl: './update-delete-product.component.html',
  styleUrls: ['./update-delete-product.component.css']
})
export class UpdateDeleteProductComponent implements OnInit {
  updateProductForm!: FormGroup;
  isSubmitted = false;
  products!: products;
  constructor(private activatedRoute: ActivatedRoute, private productService: ProductsService,
    private cartService: CartService, private router: Router, private formbuilder: FormBuilder) {
    // activatedRoute.params.subscribe((params) => {
    //   if (params.id)
    //     this.products = productService.getProductsById(params.id)
    // }
    // )
  }

  ngOnInit(): void {
   
    this.updateProductForm = this.formbuilder.group({
      pname: [this.products.name, [Validators.required]],
      price: [this.products.price, [Validators.required]],
      description: [this.products.description, [Validators.required]]

    });
  }
  get fc() {
    return this.updateProductForm.controls;
  }
  submit() {
    this.isSubmitted = true;
    if (this.updateProductForm.valid) return alert(`You have successfully updated product details!`)
    // alert (`email: ${this.fc.email.value},
    // password: ${this.fc.password.value}`)
  }
  submit1(){
    alert(`You have successfully deleted this product!`)
  }

}
