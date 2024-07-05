import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-snowtable-v1',
  templateUrl: './snowtable-v1.component.html',
  styleUrl: './snowtable-v1.component.scss'
})
export class SnowtableV1Component {
  text: string = 'Enhance your restaurant sales with real-time customer analytics, insights into customer service, and precise price control through QR menu'; // Accepts sentence as an input
  sentence: { char: string, isSpace: boolean }[] = [];
  showLogin: boolean = false;
  signUp: boolean = false;

  constructor(private router: Router) {}

  ngOnInit(): void {
    // Create an array of objects, with isSpace set accordingly
    this.sentence = this.text.split('').map(char => ({
      char: char === ' ' ? '&nbsp;' : char,
      isSpace: char === ' '
    }));
  }

  login() {
    // this.showLogin = true;
    // this.signUp = false;
    this.router.navigate(['/login']);
  }
  createAccount() {
    // this.signUp = true;
    // this.showLogin = false;
    this.router.navigate(['/register']);
  }
}
