import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class LoginService {

  domain = "http://localhost:3000";

  constructor(private http: Http) { }

  getUser(user) {
    return this.http.post(this.domain + '/authentication/findUser', user).map(res=> res.json());
  }

}
