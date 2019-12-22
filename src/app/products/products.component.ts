import { Component } from '@angular/core';
import { ProductService } from '../product.service';
import { CategoryService } from '../category.service';
import { ActivatedRoute } from '@angular/router';
import { Product } from '../models/products';
import { Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';
 

@Component({
  selector: 'products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent {
  products$;
  categories$;

  constructor(
    productService: ProductService,
    categoryService: CategoryService) { 

    this.products$ =  productService.getAll().valueChanges()
    this.categories$ = categoryService.getAll().valueChanges();  
  }
}
