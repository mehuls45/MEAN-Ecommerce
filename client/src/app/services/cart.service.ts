import { NavbarComponent } from './../navbar/navbar.component';
import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class CartService {

  domain = "http://localhost:3000";

  constructor(private http: Http) {
  }

   private cartSubject = new Subject<NavbarComponent>();
   NavbarComponent = this.cartSubject.asObservable();

  addToCart(product) {
    return this.http.post(this.domain + '/authentication/cart', product).map(res=> res.json());
    /* this.cartSubject.next(<NavbarComponent>); */
  }
 
  getCart() {
    return this.http.get(this.domain + '/authentication/cart').map(res => res.json());
  }

  updateCart(product) {
    return this.http.put(this.domain + '/authentication/cart', product).map(res => res.json());
  }

  clearCart() {
    return this.http.delete(this.domain + '/authentication/clearCart').map(res => res.json());
  }

}
