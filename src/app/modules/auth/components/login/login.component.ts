import { CommonModule } from '@angular/common';
import { SocialAuthService, GoogleSigninButtonModule } from '@abacritt/angularx-social-login';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '../../services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  email = '';
  response: any;
  constructor( private authService:SocialAuthService, private router: Router, private loginService: LoginService) {}

  ngOnInit(): void {
    this.authService.authState.subscribe((user) => {
      debugger
      if(user != null) { 
      console.log(user)
      if (user.email) {
        this.loginService.login(user.email).subscribe((data:any) =>{
          if(data.status){
            this.router.navigate(['/home']);
          }
          else{
            alert("please sign up")
          }
        })
      }
      }
    });
  }
}
