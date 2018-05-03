import { CartService } from './../services/cart.service';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-product-cart',
  templateUrl: './product-cart.component.html',
  styleUrls: ['./product-cart.component.css']
})
export class ProductCartComponent  {
  cart: any[];
  cartCount=0;
  totalPrice=0;
  quantity=1;

  constructor(
    private router: Router,
    private cartService: CartService,
    private productService: ProductService
  ) {

    this.cartService.getCart().subscribe(cart =>{
      this.cart = cart;
      this.cartCount = cart.length;
      this.cartPrice();
    });

   }


   cartPrice() {
    for( let i=0; this.cart[i]; i++){
      this.totalPrice += (this.cart[i]['price'] * this.cart[i]['quantity']);
    }
   }

   inc(product) {
     product.quantity += 1;
     this.cartService.updateCart(product).subscribe(data => {}); 
     this.totalPrice += product.price;
   }

   dec(product) {
     product.quantity -= 1;
     this.cartService.updateCart(product).subscribe(data => {});
     this.totalPrice -= product.price;
   }

   saveCart(cart) {

      this.cartService.getCart().subscribe( cart => {
        this.cart = cart;
      });
      this.router.navigate(['/checkout']);
   }
    
   clearCart() {
     this.cartService.clearCart().subscribe(data => {});
   }

}
