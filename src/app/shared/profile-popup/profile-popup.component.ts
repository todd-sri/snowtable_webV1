import { Component, EventEmitter, Output } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profile-popup',
  templateUrl: './profile-popup.component.html',
  styleUrl: './profile-popup.component.scss'
})
export class ProfilePopupComponent {

  @Output() logOut = new EventEmitter<any>();

  constructor(private router: Router) { }

  onSettings() {
    // Handle settings action here
    console.log('Settings clicked');
  }

  onLogout() {
    this.logOut.emit();
    // Handle logout action here
  }

}
