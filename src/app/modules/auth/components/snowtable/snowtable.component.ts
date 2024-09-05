import { SocialAuthService } from '@abacritt/angularx-social-login';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '../../services/login.service';

@Component({
  selector: 'app-snowtable',
  templateUrl: './snowtable.component.html',
  styleUrl: './snowtable.component.scss'
})
export class SnowtableComponent {
  email = '';
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
            alert("please sign up")
          }
        })
      }
      }
    });
  }
  login() {
    this.router.navigate(['/login']);
  }
  createAccount() {
    this.router.navigate(['/register']);
  }
}
