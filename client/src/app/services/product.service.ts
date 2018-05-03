import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map'

@Injectable()
export class ProductService {

  domain = "http://localhost:3000";

  constructor(private http: Http) { }

  registerProduct(product) {
    return this.http.post(this.domain + '/authentication/register', product).map(res => res.json());
  }

  getProducts() {
    return this.http.get(this.domain + '/authentication/register').map(res => res.json());
  }

  getProductByName(productName) {
    return this.http.post(this.domain + '/authentication/findProduct', productName).map(res => res.json());
  }

  deleteProduct(product) {
    return this.http.post(this.domain + '/authentication/deleteProduct', product).map(res => res.json());
  }

  updateProduct(product) {
    return this.http.put(this.domain + '/authentication/updateProduct', product).map(res => res.json());
  }

}
