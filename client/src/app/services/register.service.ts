import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class RegisterService {

  domain = "http://localhost:3000";

  constructor(private http: Http) { }

  addUser(user) {
    return this.http.post(this.domain + '/authentication/user', user).map(res=> res.json());
  }

}
