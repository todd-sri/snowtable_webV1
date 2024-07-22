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
  email: string ='';
  password: string='';

  response: any;
  constructor( private authService:SocialAuthService, private router: Router, private loginService: LoginService) {}

  ngOnInit(): void {
    this.authService.authState.subscribe((user) => {
      if(user != null) { 
      console.log(user)
      if (user.email) {
        this.loginService.login(user.email).subscribe((data:any) =>{
          if(data.status){
            this.router.navigate(['/home']);
          }
          else{
            this.router.navigate(['/confirm']);
          }
        })
      }
      }
    });
  }
  createAccount() {
    this.router.navigate(['/register']);
  }
  login(){ 
      const userDetails = {
        email: this.email,
        password: this.password
      }
      if (this.email && this.password) {
        this.loginService.login(userDetails).subscribe((data:any) =>{
          if(data.status){
            this.router.navigate(['/home']);
          }
          else{
            this.router.navigate(['/confirm']);
          }
        })
      } else {

      }
      }
}
