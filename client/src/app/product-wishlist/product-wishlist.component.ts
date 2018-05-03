import { NavbarService } from './../services/navbar.service';
import { ProductService } from './../services/product.service';
import { WishlistService } from './../services/wishlist.service';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-wishlist',
  templateUrl: './product-wishlist.component.html',
  styleUrls: ['./product-wishlist.component.css']
})
export class ProductWishlistComponent {
  wish: any[];
  wishCount=0;

  constructor(
    private router: Router,
    private navbarService: NavbarService,
    private wishListService: WishlistService,
    ) {
      this.wishListService.getWishlist().subscribe( wish => {
        this.wish = wish;
        this.wishCount = wish.length;
      });
   }  

   seeDetails(id) {
    this.router.navigate(['wishlist-detail',id]);
  }

   removeFromWishlist(product) {
     this.wishListService.removeFromWishlist(product).subscribe(data => {
       
     });
   }

}
