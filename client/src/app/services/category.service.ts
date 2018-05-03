import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class CategoryService {

  domain = "http://localhost:3000";

  constructor(private http: Http) { }

  addCategory(category) {
    return this.http.post(this.domain + '/authentication/category', category).map(res=> res.json());
  }

  getCategory() {
    return this.http.get(this.domain + '/authentication/category').map(res=> res.json());
  }

}
