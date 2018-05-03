import { Injectable } from '@angular/core';
import { Router, CanActivate, RouterStateSnapshot } from '@angular/router';

@Injectable()
export class AuthGuardService implements CanActivate {

  email;

  constructor(private router: Router) { }

  canActivate(route, state: RouterStateSnapshot) {
    this.email = localStorage.getItem('email');
    if(this.email) {
      return true;
    } else {
      this.router.navigate(['/login'], { queryParams: { returnUrl: state.url } });
      return false;
    }

  }

}
