import { ProductService } from './../../services/product.service';
import { CartService } from './../../services/cart.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'order-summary',
  templateUrl: './order-summary.component.html',
  styleUrls: ['./order-summary.component.css']
})
export class OrderSummaryComponent  {

  cart: any[];
  cartCount=0;
  totalPrice=0;

  constructor(
    private cartService: CartService,
    private productService: ProductService) { 

    cartService.getCart().subscribe( cart => {
      this.cart = cart;
      this.cartCount = cart.length;
      this.cartPrice();
    });
  }

  cartPrice() {
    for(let i in this.cart){
      this.totalPrice += (this.cart[i]['price'] * this.cart[i]['quantity']);
    }
   }

}
