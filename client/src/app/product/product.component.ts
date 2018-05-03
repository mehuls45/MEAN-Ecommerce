import { NavbarService } from './../services/navbar.service';
import { CategoryService } from './../services/category.service';
import { ProductService } from '../services/product.service';
import { CartService } from '../services/cart.service';
import { WishlistService } from '../services/wishlist.service';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent {
  products: any[];
  categories: any[];
  term;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private cartService: CartService,
    private navbarService: NavbarService,
    private categoryService: CategoryService,
    private wishListService: WishlistService,
    private productService: ProductService
  ) {
      this.productService.getProducts().subscribe(product =>{
        this.products = product;
        this.getCategories();
      });
    }

    setItem(category) {
      this.term = category;
    }

    getCategories() {
      this.categoryService.getCategory().subscribe( categories => {
        this.categories = categories;
      });
    }

  seeDetails(id) {
    this.router.navigate(['product-detail',id]);
  }

  addToWishlist(product) {
    this.wishListService.addToWishlist(product).subscribe( data=> {
      this.wishListService.getWishlist().subscribe( wish => {
        this.navbarService.wishCount(wish.length);
      });
     });
  }

  addToCart(product) {
    this.cartService.addToCart(product).subscribe(data => {
      this.cartService.getCart().subscribe( cart => {
        this.navbarService.cartCount(cart.length);
      });
    });
  }


}
