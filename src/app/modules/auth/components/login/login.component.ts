// import { CommonModule } from '@angular/common';
// import { SocialAuthService, GoogleSigninButtonModule } from '@abacritt/angularx-social-login';
// import { Component, OnInit } from '@angular/core';
// import { Router } from '@angular/router';
// import { LoginService } from '../../services/login.service';

// @Component({
//   selector: 'app-login',
//   templateUrl: './login.component.html',
//   styleUrl: './login.component.scss'
// })
// export class LoginComponent implements OnInit {
//   email: string = '';
//   password: string = '';

//   response: any;
//   error = null;
//   loading: boolean = false;
//   constructor(private authService: SocialAuthService, private router: Router, private loginService: LoginService) {}

//   ngOnInit(): void {
//     this.authService.authState.subscribe((user) => {
//       this.loading = true;
//       if (user != null) {
//         console.log(user)
//         if (user.email) {
//           this.loginService.login(user.email).subscribe((data: any) => {
//             if (data.status) {
//               this.router.navigate(['/home']);
//             } else {
//               this.router.navigate(['/confirm']);
//             }
//           })
//         }
//       }
//     });
//   }

//   createAccount() {
//     this.router.navigate(['/register']);
//   }

//   login() {
//     this.loading = true;
//     const userDetails = {
//       email: this.email,
//       password: this.password
//     }
//     if (this.email && this.password) {
//       this.loginService.login(userDetails).subscribe((data: any) => {
//         if (data.status) {
//           localStorage.setItem('res_uuid', data.res_uuid);
//           this.router.navigate(['/home']);
//         } else {
//           this.router.navigate(['/confirm']);
//         }
//       }, response => {
//         this.loading = false;
//         this.error = response.error.error;
//       })
//     }
//   }

//   handleKeydown(event: KeyboardEvent): void {
//     this.error = null;
//     if (event.key === 'Enter') {
//       this.login();
//     }
//   }
// }

import { CommonModule } from '@angular/common';
import { SocialAuthService, GoogleSigninButtonModule } from '@abacritt/angularx-social-login';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '../../services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  email: string = '';
  password: string = '';
  loading: boolean = false;
  error: string | null = null;

  constructor(private authService: SocialAuthService, private router: Router, private loginService: LoginService) {}

  ngOnInit(): void {
    this.authService.authState.subscribe((user) => {
      if (user != null) {
        console.log(user)
        if (user.email) {
          this.loginService.login(user.email).subscribe((data: any) => {
            if (data.status) {
              this.router.navigate(['/home']);
            } else {
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

  login() {
    const userDetails = {
      email: this.email,
      password: this.password
    }
    if (this.email && this.password) {
      this.loading = true;
      this.loginService.login(userDetails).subscribe({
        next: (data: any) => {
          if (data.status) {
            localStorage.setItem('res_uuid', data.res_uuid);
            localStorage.setItem('hotelStatus', data.hotel_status);
            this.router.navigate(['/home']);
          } else {
            this.router.navigate(['/confirm']);
          }
        },
        error: (err) => {
          this.loading = false;
          this.error = "Login failed. Please try again.";
          console.error(err);
        },
        complete: () => {
          this.loading = false;
        }
      });
    } else {
      this.error = "Please provide email and password.";
    }
  }

  handleKeydown(event: KeyboardEvent): void {
    this.error = null;
    if (event.key === 'Enter') {
      this.login();
    }
  }
}

