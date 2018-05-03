import { ProductService } from './../services/product.service';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent  implements OnInit {

  product: any[];
  productCount;
  term;

  constructor(
    private router: Router,
    private productService: ProductService) {
      
   }

   ngOnInit() {
    this.initComponent();
   }

   initComponent() {
    this.productService.getProducts().subscribe(product =>{
      this.product = product;
      this.productCount = this.product.length;
    });
   }

   deleteProduct(product) {
    this.productService.deleteProduct(product).subscribe(data => {
      this.ngOnInit();
    });
   }

   updateProduct(product) {
     localStorage.setItem('product-title', product.title );
     localStorage.setItem('product-stock', product.stock );
     localStorage.setItem('product-price', product.price );
     localStorage.setItem('product-category', product.category );
     localStorage.setItem('product-discription', product.discription );
     localStorage.setItem('product-imageurl', product.imageurl );

     this.router.navigate(['/product-update']);
   }

}
