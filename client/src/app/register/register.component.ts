import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { RegisterService } from '../services/register.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  message;
  success;

  constructor(
    private router: Router,
    private registerService: RegisterService) { }

  register(info) {
    this.registerService.addUser(info.value).subscribe( data => {
      this.success = data.success;
      this.message = data.message;

      if(this.success) {
        setTimeout( () => {
          this.router.navigate(['/login']);
        }, 2000);  
      }
    });
  }

}
