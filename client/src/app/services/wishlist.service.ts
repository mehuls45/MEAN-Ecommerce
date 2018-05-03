import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map'

@Injectable()
export class WishlistService {

  domain = "http://localhost:3000";

  constructor(private http: Http) { }

  addToWishlist(product) {
    return this.http.post(this.domain + '/authentication/wishlist', product).map(res=> res.json());
  }
 
  getWishlist() {
    return this.http.get(this.domain + '/authentication/wishlist').map(res => res.json());
  }

  removeFromWishlist(product) {
    return this.http.post(this.domain + '/authentication/removeFromWishlist', product).map(res => res.json());
  }

}
