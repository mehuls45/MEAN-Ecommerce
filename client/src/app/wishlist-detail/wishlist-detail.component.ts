import { WishlistService } from './../services/wishlist.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-wishlist-detail',
  templateUrl: './wishlist-detail.component.html',
  styleUrls: ['./wishlist-detail.component.css']
})
export class WishlistDetailComponent {
  wishlist: any[];
  obs;
  id;

  constructor(
    private route: ActivatedRoute,
    private wishListService: WishlistService
  ) { 
    this.getDetail();
  }

  getDetail() {

    this.obs = Observable.combineLatest([
      this.wishListService.getWishlist(),
      this.route.params
    ])

    this.obs.subscribe(res => {
      this.wishlist = res[0];
      this.id = res[1]['id'];
    });
    
  }

}
