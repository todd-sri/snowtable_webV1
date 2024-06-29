import { SocialAuthService } from '@abacritt/angularx-social-login';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-page-header',
  templateUrl: './page-header.component.html',
  styleUrl: './page-header.component.scss'
})
export class PageHeaderComponent {

  showPopup = false;
  constructor(private router: Router,private authService: SocialAuthService) { }
  togglePopup() {
    this.showPopup = !this.showPopup;
  }

  onLogout() {
    debugger
    this.authService.signOut();
    // Implement logout logic here
    console.log('Logging out...');
    this.showPopup = false; // Close popup after logout action
    this.router.navigate(['/']);  
  }


}
