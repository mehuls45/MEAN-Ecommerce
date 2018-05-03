import { NavbarService } from './../../services/navbar.service';
import { CartService } from './../../services/cart.service';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { OrderService } from '../../services/order.service';


@Component({
  selector: 'shipping-form',
  templateUrl: './shipping-form.component.html',
  styleUrls: ['./shipping-form.component.css']
})
export class ShippingFormComponent  {

  cart: any[];
  totalPrice=0;

  constructor(
    private router: Router,
    private navbarService: NavbarService,
    private orderService: OrderService,
    private cartService: CartService) { 

      cartService.getCart().subscribe( cart => {
        this.cart = cart;
        this.cartPrice();
      });

    }

  placeOrder(info) {

    this.pay();

    this.cartService.getCart().subscribe(cart => {
      this.cart = cart;
      info.value.date = new Date().getTime();
      info.value.cart = this.cart;
      info.value.completed = 'false',
      this.orderService.saveOrder(info.value).subscribe(data => {
        this.navbarService.cartClear();
      });
      
    });
    this.cartService.clearCart().subscribe(data => {
      
    });
  }

  pay() {

      var handler = (<any>window).StripeCheckout.configure({
        key: 'pk_test_oi0sKPJYLGjdvOXOM8tE8cMa',
        locale: 'auto',
        token: function (token: any) {
        }
      });
  
      handler.open({
        name: 'Organic Shop',
        amount: this.totalPrice * 100,
        closed: () => {
          this.router.navigate(['/order-success']);
        }
        
      });

    
  }

  cartPrice() {
    for(let i in this.cart){
      this.totalPrice += (this.cart[i]['price'] * this.cart[i]['quantity']);
    }
   }


}
