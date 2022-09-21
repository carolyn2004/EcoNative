import { Component, OnInit } from '@angular/core';
import { Tag } from '../models/Tag';
import { ProductsService } from '../products.service';

@Component({
  selector: 'app-tags',
  templateUrl: './tags.component.html',
  styleUrls: ['./tags.component.css']
})
export class TagsComponent implements OnInit {
  tags:Tag[] = [];
  constructor(private productService:ProductsService) { }

  ngOnInit(): void {
    this.tags=this.productService.getAllTags();
  }

}
