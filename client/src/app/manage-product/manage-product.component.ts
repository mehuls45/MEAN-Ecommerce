import { CategoryService } from './../services/category.service';
import { ProductService } from './../services/product.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-manage-product',
  templateUrl: './manage-product.component.html',
  styleUrls: ['./manage-product.component.css']
})
export class ManageProductComponent {

  product: any[];
  categories: any[];
  productName: String;
  success;
  message;

  constructor(
    private router: Router,
    private categoryService: CategoryService,
    private productService: ProductService) {

      this.categoryService.getCategory().subscribe(categories => {
        this.categories = categories;
      });
  }

  save(info) {

    const product = {
      title: info.title,
      discription: info.discription,
      price: info.price,
      category: info.category,
      quantity: 1,
      stock: info.stock,
      imageurl: info.imageurl
    }
    this.productService.registerProduct(product).subscribe( data => {
       this.success = data.success;
       this.message = data.message;

       if(this.success) {
        setTimeout( () => {
          this.router.navigate(['/product-list']);
        }, 2000);  
      } 
    }); 
    
  }

  addCategory(category){
    this.categoryService.addCategory(category.value).subscribe( data => {} );
  }
}
