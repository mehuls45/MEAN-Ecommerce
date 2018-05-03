import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class NavbarService {

  private cart = new BehaviorSubject(0);
  cartCount$ = this.cart.asObservable();

  private wish = new BehaviorSubject(0);
  wishCount$ = this.wish.asObservable();

  private login = new BehaviorSubject('false');
  login$ = this.login.asObservable();

  private logout = new BehaviorSubject('false');
  logout$ = this.logout.asObservable();

  private clearCart = new BehaviorSubject(0);
  clearCart$ = this.logout.asObservable();


  constructor() { }

  cartCount(cartCount) {
    this.cart.next(cartCount);
  }

  wishCount(wishCount) {
    this.wish.next(wishCount);
  }

  loginUser(isAdmin) {
    this.login.next(isAdmin);
  }

  logoutUser() {
    let isAdmin = null;
    this.logout.next(isAdmin);
  }

  cartClear() {
    this.clearCart.next(0);
  }

}
