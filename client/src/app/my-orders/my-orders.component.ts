import { Component, OnInit } from '@angular/core';
import { OrderService } from '../services/order.service';

@Component({
  selector: 'app-my-orders',
  templateUrl: './my-orders.component.html',
  styleUrls: ['./my-orders.component.css']
})
export class MyOrdersComponent  {

  orders: any[];
  email;

  constructor(private orderService: OrderService) { 

    this.orderService.getOrder().subscribe( orders =>  {
      this.orders = orders;
      this.email = localStorage.getItem('email') || null;
    });
  }

  cartPrice(cart) {
    let totalPrice=0;
    for(let i in cart){
      totalPrice += (cart[i]['price'] * cart[i]['quantity']);
    }
    return totalPrice;
   }


}
