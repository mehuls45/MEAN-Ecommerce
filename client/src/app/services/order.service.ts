import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map'

@Injectable()
export class OrderService {

  domain = "http://localhost:3000";

  constructor(private http: Http) { }

  saveOrder(order) {
    return this.http.post(this.domain + '/authentication/Order', order).map(res => res.json());
  }

  getOrder() {
    return this.http.get(this.domain + '/authentication/Order').map(res => res.json());
  }

  dispatchOrder(order) {
    return this.http.put(this.domain + '/authentication/dispatchOrder', order).map(res => res.json());
  }

}
