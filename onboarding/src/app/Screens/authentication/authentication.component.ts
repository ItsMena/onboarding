import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-authentication',
  templateUrl: './authentication.component.html',
  styleUrls: ['./authentication.component.css']
})
export class AuthenticationComponent {

  constructor(private router: Router) { }

  username: string= '';
  password: string= '';

  authHandler(){
    console.log(this.username)
    console.log(this.password)

    if(this.username === 'test' && this.password === '123'){
      this.router.navigate(['home']);
    }
  }
}
