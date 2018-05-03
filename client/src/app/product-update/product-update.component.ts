import { CategoryService } from './../services/category.service';
import { Component, OnInit } from '@angular/core';
import { ProductService } from '../services/product.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product-update',
  templateUrl: './product-update.component.html',
  styleUrls: ['./product-update.component.css']
})
export class ProductUpdateComponent {

  categories: any[];

  productTitle;
  productPrice;
  productDiscription;
  productStock;
  productCategory;
  productImageurl;

  success;
  message;

  constructor(
    private router: Router,
    private productService: ProductService,
    private categoryService: CategoryService
  ) {
      this.categoryService.getCategory().subscribe( categories => {
        this.categories = categories;
      });

      this.getProductInfo();
   }

   getProductInfo() {

      this.productTitle = localStorage.getItem('product-title');
      this.productPrice = localStorage.getItem('product-price');
      this.productStock = localStorage.getItem('product-stock');

      this.productCategory = localStorage.getItem('product-category');
      this.productDiscription = localStorage.getItem('product-discription');
      this.productImageurl = localStorage.getItem('product-imageurl');

   }

  save(info) {
    this.productService.updateProduct(info).subscribe( res => {
      this.success = res.success;
      this.message = res.message;

      localStorage.removeItem('product-title');
      localStorage.removeItem('product-price');
      localStorage.removeItem('product-stock');
      localStorage.removeItem('product-category');
      localStorage.removeItem('product-discription');
      localStorage.removeItem('product-imageurl');

      if(this.success) {
        setTimeout( () => {
          this.router.navigate(['/product-list']);
        }, 2000);  
      }

    });
  }

}
